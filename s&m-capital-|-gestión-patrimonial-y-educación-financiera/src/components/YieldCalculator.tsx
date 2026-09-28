import React, { useState, useId } from 'react';
import { Currency, PlanType } from '../types/index.ts';
import { Calculator, ArrowRight, ShieldAlert, Sparkles, TrendingUp, Info } from 'lucide-react';

interface YieldCalculatorProps {
  selectedPlan: PlanType;
  onPlanChange: (plan: PlanType) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onPreApproveQuote: (summary: {
    plan: PlanType;
    currency: Currency;
    amount: number;
    months: number;
    totalContributed: number;
    projectedYield: number;
    finalBalance: number;
    monthlyRate: number;
  }) => void;
}

export const YieldCalculator: React.FC<YieldCalculatorProps> = ({
  selectedPlan,
  onPlanChange,
  currency,
  onCurrencyChange,
  onPreApproveQuote,
}) => {
  const amountSliderId = useId();
  const termSliderId = useId();

  // Presets and states
  // Risk profiles: Conservador (2.0%), Balanceado (2.6%), Dinámico (3.2%)
  const [profile, setProfile] = useState<'conservador' | 'balanceado' | 'dinamico'>('balanceado');
  
  // Rate mapping
  const monthlyRates = {
    conservador: 0.020, // 2.0%
    balanceado: 0.026,  // 2.6%
    dinamico: 0.032,    // 3.2%
  };

  const currentRate = monthlyRates[profile];

  // Sliders state
  // Modalidad A amounts: USD 65 - 6500; GTQ 500 - 50000
  const [amountSingleUSD, setAmountSingleUSD] = useState<number>(650);
  const [amountSingleGTQ, setAmountSingleGTQ] = useState<number>(5000);

  // Modalidad B monthly contributions: USD 25 - 200; GTQ 200 - 1500
  const [amountMonthlyUSD, setAmountMonthlyUSD] = useState<number>(65);
  const [amountMonthlyGTQ, setAmountMonthlyGTQ] = useState<number>(500);

  // Terms in months: 6, 12, 18, 24
  const [termMonths, setTermMonths] = useState<number>(12);

  // Active amount based on plan & currency
  const activeAmount =
    selectedPlan === 'MODALIDAD_A'
      ? currency === 'USD'
        ? amountSingleUSD
        : amountSingleGTQ
      : currency === 'USD'
      ? amountMonthlyUSD
      : amountMonthlyGTQ;

  // Math calculations
  let totalContributed = 0;
  let finalBalance = 0;
  let projectedYield = 0;

  // Month-by-month trajectory for visual breakdown
  const monthlyProgression: { month: number; contributed: number; total: number }[] = [];

  if (selectedPlan === 'MODALIDAD_A') {
    totalContributed = activeAmount;
    let current = activeAmount;
    for (let m = 1; m <= termMonths; m++) {
      current = current * (1 + currentRate);
      if (m % Math.max(1, Math.floor(termMonths / 6)) === 0 || m === termMonths) {
        monthlyProgression.push({
          month: m,
          contributed: totalContributed,
          total: Math.round(current),
        });
      }
    }
    finalBalance = current;
    projectedYield = finalBalance - totalContributed;
  } else {
    // Modalidad B: Monthly annuity with compound interest
    // FV = PMT * [((1 + r)^n - 1) / r] * (1 + r)
    totalContributed = activeAmount * termMonths;
    let balance = 0;
    for (let m = 1; m <= termMonths; m++) {
      balance = (balance + activeAmount) * (1 + currentRate);
      if (m % Math.max(1, Math.floor(termMonths / 6)) === 0 || m === termMonths) {
        monthlyProgression.push({
          month: m,
          contributed: activeAmount * m,
          total: Math.round(balance),
        });
      }
    }
    finalBalance = balance;
    projectedYield = finalBalance - totalContributed;
  }

  const formatMoney = (val: number) => {
    const symbol = currency === 'USD' ? '$' : 'Q';
    return `${symbol}${Math.round(val).toLocaleString('en-US')}`;
  };

  const handleApplySimulation = () => {
    onPreApproveQuote({
      plan: selectedPlan,
      currency,
      amount: activeAmount,
      months: termMonths,
      totalContributed,
      projectedYield,
      finalBalance,
      monthlyRate: currentRate,
    });
  };

  return (
    <section id="calculadora" className="py-20 lg:py-28 bg-[#090D14] border-t border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Financiero en Tiempo Real</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Calculadora Interactiva de Rendimientos
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto">
            Proyecte el potencial de su capital con base en la capitalización compuesta y perfiles de riesgo controlados.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="max-w-5xl mx-auto bg-[#0E1420] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Top Controls: Plan Selector & Currency */}
          <div className="p-4 sm:p-6 bg-[#0B0F19] border-b border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Plan Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#131B2B] rounded-xl w-full md:w-auto">
              <button
                type="button"
                onClick={() => onPlanChange('MODALIDAD_A')}
                className={`flex-1 md:flex-none px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlan === 'MODALIDAD_A'
                    ? 'bg-[#D4AF37] text-slate-950 shadow-md shadow-[#D4AF37]/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Modalidad A: Capital Único
              </button>
              <button
                type="button"
                onClick={() => onPlanChange('MODALIDAD_B')}
                className={`flex-1 md:flex-none px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlan === 'MODALIDAD_B'
                    ? 'bg-[#D4AF37] text-slate-950 shadow-md shadow-[#D4AF37]/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Modalidad B: Cuchubal Formal
              </button>
            </div>

            {/* Currency Pill */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <span className="text-xs text-slate-400">Divisa:</span>
              <div className="flex items-center gap-1 bg-[#131B2B] p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => onCurrencyChange('USD')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => onCurrencyChange('GTQ')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    currency === 'GTQ'
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GTQ (Q)
                </button>
              </div>
            </div>

          </div>

          {/* Calculator Grid: Inputs (Left) and Results (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-8">
              
              {/* Amount Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={amountSliderId} className="text-xs sm:text-sm font-semibold text-slate-200">
                    {selectedPlan === 'MODALIDAD_A' ? 'Capital Único Inicial:' : 'Aporte Mensual Programado:'}
                  </label>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#E6CA65] tabular-nums">
                    {formatMoney(activeAmount)}
                  </span>
                </div>

                {selectedPlan === 'MODALIDAD_A' ? (
                  currency === 'USD' ? (
                    <input
                      id={amountSliderId}
                      type="range"
                      min={65}
                      max={6500}
                      step={25}
                      value={amountSingleUSD}
                      onChange={(e) => setAmountSingleUSD(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  ) : (
                    <input
                      id={amountSliderId}
                      type="range"
                      min={500}
                      max={50000}
                      step={250}
                      value={amountSingleGTQ}
                      onChange={(e) => setAmountSingleGTQ(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  )
                ) : (
                  currency === 'USD' ? (
                    <input
                      id={amountSliderId}
                      type="range"
                      min={25}
                      max={200}
                      step={5}
                      value={amountMonthlyUSD}
                      onChange={(e) => setAmountMonthlyUSD(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  ) : (
                    <input
                      id={amountSliderId}
                      type="range"
                      min={200}
                      max={1500}
                      step={50}
                      value={amountMonthlyGTQ}
                      onChange={(e) => setAmountMonthlyGTQ(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  )
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Mín: {formatMoney(selectedPlan === 'MODALIDAD_A' ? (currency === 'USD' ? 65 : 500) : (currency === 'USD' ? 25 : 200))}</span>
                  <span>Máx: {formatMoney(selectedPlan === 'MODALIDAD_A' ? (currency === 'USD' ? 6500 : 50000) : (currency === 'USD' ? 200 : 1500))}</span>
                </div>
              </div>

              {/* Term Slider / Months */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={termSliderId} className="text-xs sm:text-sm font-semibold text-slate-200">
                    Plazo de Inversión:
                  </label>
                  <span className="font-mono text-lg sm:text-xl font-bold text-white tabular-nums">
                    {termMonths} Meses
                  </span>
                </div>

                <input
                  id={termSliderId}
                  type="range"
                  min={6}
                  max={24}
                  step={3}
                  value={termMonths}
                  onChange={(e) => setTermMonths(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  {[6, 9, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTermMonths(m)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        termMonths === m
                          ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m}m
                    </button>
                  ))}
                </div>
              </div>

              {/* Risk Profile Selection */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    Perfil de Gestión Operativa:
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37]">
                    {(currentRate * 100).toFixed(1)}% est. mensual
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setProfile('conservador')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      profile === 'conservador'
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-sm'
                        : 'bg-[#0B0F19] border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold">Conservador</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">2.0% mes · Mín. riesgo</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfile('balanceado')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      profile === 'balanceado'
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-sm'
                        : 'bg-[#0B0F19] border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold">Balanceado</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">2.6% mes · Estándar</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProfile('dinamico')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      profile === 'dinamico'
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-sm'
                        : 'bg-[#0B0F19] border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-semibold">Crecimiento</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">3.2% mes · Mayor plazo</div>
                  </button>
                </div>
              </div>

              {/* Informative Note */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 text-blue-200 text-xs leading-relaxed">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {selectedPlan === 'MODALIDAD_A'
                    ? 'Modalidad A: Su capital se coloca íntegro desde el primer día, capitalizando intereses sobre el total acumulado en cada ciclo.'
                    : 'Modalidad B (Cuchubal Formal): Cada cuota mensual se suma automáticamente a la masa de inversión, generando interés compuesto acumulado mes a mes.'}
                </span>
              </div>

            </div>

            {/* Right Results Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0B101B] flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    PROYECCIÓN DE RENDIMIENTO ESTIMADO
                  </span>
                  <div className="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1 font-mono tabular-nums">
                    {formatMoney(finalBalance)}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Capital final proyectado al culminar {termMonths} meses
                  </div>
                </div>

                {/* Breakdown metrics */}
                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Total Capital Aportado:</span>
                    <span className="font-mono font-semibold text-slate-200 tabular-nums">
                      {formatMoney(totalContributed)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Ganancia Neta Estimada:</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +{formatMoney(projectedYield)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Rendimiento Total Acumulado:</span>
                    <span className="font-mono font-bold text-[#E6CA65] tabular-nums">
                      +{((projectedYield / Math.max(1, totalContributed)) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Visual progression bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Aporte ({Math.round((totalContributed / finalBalance) * 100)}%)</span>
                    <span>Interés ({Math.round((projectedYield / finalBalance) * 100)}%)</span>
                  </div>
                  <div className="h-3 w-full bg-[#182235] rounded-full overflow-hidden flex">
                    <div
                      className="bg-slate-500 h-full transition-all duration-300"
                      style={{ width: `${(totalContributed / finalBalance) * 100}%` }}
                    />
                    <div
                      className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] h-full transition-all duration-300"
                      style={{ width: `${(projectedYield / finalBalance) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Milestone summary preview */}
                <div className="p-3 bg-[#080D16] rounded-lg border border-white/[0.06] text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Resumen Ejecutivo</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Al término de {termMonths} meses bajo la {selectedPlan === 'MODALIDAD_A' ? 'Modalidad A (Capital Único)' : 'Modalidad B (Cuchubal Formal)'}, su fondo totalizará aproximadamente <strong className="text-white font-mono">{formatMoney(finalBalance)}</strong> mediante contratos respaldados ante Notario en Ciudad de Guatemala.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={handleApplySimulation}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#E6CA65] via-[#D4AF37] to-[#B89228] hover:from-[#F3E5AB] hover:to-[#D4AF37] rounded-lg transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/15"
                >
                  <span>Solicitar Asesoría con Esta Proyección</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* OBLIGATORY INSTITUTIONAL DISCLAIMER (DESCARGO DE RESPONSABILIDAD) */}
          <div className="p-4 sm:p-6 bg-[#070B12] border-t border-white/[0.08] text-slate-400">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="space-y-1 text-[11px] sm:text-xs leading-relaxed font-light">
                <span className="font-semibold text-slate-300 uppercase tracking-wider block font-mono">
                  Descargo Institucional Obligatorio & Advertencia de Riesgo Regulatorio
                </span>
                <p>
                  Las estimaciones y proyecciones calculadas en esta herramienta tienen propósito estrictamente informativo, ilustrativo y formativo. Los rendimientos pasados de estrategias de inversión no garantizan rendimientos futuros. Toda participación en mercados de divisas internacionales (Forex) y derivados financieros conlleva riesgo inherente de mercado. S&M Capital no capta fondos del público en masa ni promete rentabilidades fijas garantizadas al margen de la ley. Cada relación con nuestros clientes se formaliza mediante contratos individuales de mutuo con reconocimiento de firmas ante Notario Público en la República de Guatemala, rigiéndose por el Código Civil y de Comercio vigentes.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
