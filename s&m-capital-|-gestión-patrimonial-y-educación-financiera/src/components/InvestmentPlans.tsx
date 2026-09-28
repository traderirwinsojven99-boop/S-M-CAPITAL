import React, { useState } from 'react';
import { Currency } from '../types/index.ts';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Layers, PiggyBank, FileSignature } from 'lucide-react';

interface InvestmentPlansProps {
  onSelectPlanForCalc: (plan: 'MODALIDAD_A' | 'MODALIDAD_B', currency: Currency) => void;
  onOpenSchedule: () => void;
}

export const InvestmentPlans: React.FC<InvestmentPlansProps> = ({
  onSelectPlanForCalc,
  onOpenSchedule,
}) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  return (
    <section id="planes" className="py-20 lg:py-28 bg-[#07090E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Currency Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Estructura de Inversión</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Modelos Formales</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Planes de Inversión transparentes, respaldados y adaptados a su horizonte.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Seleccione la modalidad que mejor se alinee con su perfil patrimonial: gestión de capital único o ahorro programado mensual formalizado.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-2 bg-[#0D131F] border border-white/[0.08] p-1.5 rounded-lg self-start md:self-auto shrink-0">
            <span className="text-xs text-slate-400 px-2 font-medium">Moneda:</span>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                currency === 'USD'
                  ? 'bg-[#D4AF37] text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('GTQ')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                currency === 'GTQ'
                  ? 'bg-[#D4AF37] text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              GTQ (Q)
            </button>
          </div>
        </div>

        {/* The Two Flagship Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Modalidad A: Gestión Patrimonial de Capital Único */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0F1626] to-[#0A0E17] border border-white/[0.12] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl">
            <div className="space-y-6">
              
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase font-semibold">MODALIDAD A</span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white pt-1">
                    Gestión Patrimonial de Capital Único
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    Diseñado para capitales consolidados, empresas familiares, profesionistas y excedentes de liquidez.
                  </p>
                </div>
              </div>

              {/* Financial Conditions Box */}
              <div className="p-4 rounded-xl bg-[#090D14]/80 border border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div className="text-left">
                  <div className="text-[11px] text-slate-400">Rango de Capital</div>
                  <div className="font-mono text-base font-bold text-white tabular-nums mt-0.5">
                    {currency === 'USD' ? '$65 – $6,500 USD' : 'Q500 – Q50,000 GTQ'}
                  </div>
                  <div className="text-[10px] text-[#D4AF37] font-mono">
                    {currency === 'USD' ? 'Desde $65 USD' : 'A partir de Q500 GTQ'}
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400">Rendimiento Estimado</div>
                  <div className="font-mono text-base font-bold text-[#E6CA65] tabular-nums mt-0.5">
                    2.0% – 3.5% <span className="text-[11px] font-normal text-slate-400">/ mes</span>
                  </div>
                </div>
                <div className="text-left col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-slate-400">Horizontes</div>
                  <div className="font-mono text-sm font-semibold text-slate-200 mt-0.5">
                    6, 12, 24 meses
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Especificaciones Operativas:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Contrato privado de mutuo financiero con legalización de firmas ante Notario Público.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Diversificación en divisas mayores y metales con control de drawdown estricto.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Opción de retiros periódicos de rendimientos o capitalización compuesta integral.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Reportes técnicos mensuales con desglose de operaciones y contexto macroeconómico.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onSelectPlanForCalc('MODALIDAD_A', currency)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#E6CA65] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#E6CA65] rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Simular Modalidad A</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenSchedule}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors cursor-pointer text-center"
              >
                Consultar con Asesor
              </button>
            </div>
          </div>

          {/* Modalidad B: Ahorro Programado / Estilo Cuchubal Formal */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#111A2C] to-[#0A0F1A] border-2 border-[#D4AF37]/40 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 shadow-xl shadow-[#D4AF37]/5">
            {/* Subtle editorial flag */}
            <div className="absolute -top-3 right-6 bg-[#D4AF37] text-slate-950 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider font-mono">
              INNOVACIÓN FORMAL GUATEMALA
            </div>

            <div className="space-y-6">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
                    <PiggyBank className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase font-semibold">MODALIDAD B</span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white pt-1">
                  Ahorro Programado · Cuchubal Formal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  Aportes mensuales fijos con contratos legales, seguridad e interés compuesto frente a la informalidad.
                </p>
              </div>

              {/* Financial Conditions Box */}
              <div className="p-4 rounded-xl bg-[#090D14]/80 border border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div className="text-left">
                  <div className="text-[11px] text-slate-400">Cuota Mensual</div>
                  <div className="font-mono text-base font-bold text-white tabular-nums mt-0.5">
                    {currency === 'USD' ? '$25 – $200 USD / m' : 'Q200 – Q1,500 GTQ / m'}
                  </div>
                  <div className="text-[10px] text-[#D4AF37] font-mono">
                    {currency === 'USD' ? 'Mínimo: $25 USD' : 'Monto Mínimo: Q200 GTQ'}
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400">Mecanismo</div>
                  <div className="font-mono text-sm font-bold text-[#E6CA65] mt-0.5">
                    Interés Compuesto
                  </div>
                </div>
                <div className="text-left col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-slate-400">Horizontes</div>
                  <div className="font-mono text-sm font-semibold text-slate-200 mt-0.5">
                    6, 12, 18, 24 meses
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Ventajas frente al cuchubal tradicional:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>100% blindado legalmente:</strong> Contrato individualizado; nadie se va con su dinero.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Crecimiento exponencial:</strong> Su ahorro no duerme; se capitaliza mensualmente con interés compuesto.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Disciplina sin intermediarios dudosos:</strong> Aportes bancarizados con recibo fiscal y comprobante oficial.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Ideal para metas familiares, enganche de vivienda, vehículos o fondos de emergencia.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onSelectPlanForCalc('MODALIDAD_B', currency)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#E6CA65] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#E6CA65] rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-md shadow-[#D4AF37]/20"
              >
                <span>Simular Cuchubal Formal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenSchedule}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors cursor-pointer text-center"
              >
                Solicitar Contrato
              </button>
            </div>
          </div>

        </div>

        {/* Rigorous Comparison: Informal Cuchubal vs. S&M Capital Formal Cuchubal */}
        <div className="rounded-2xl bg-[#0B0F18] border border-white/[0.08] p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileSignature className="w-5 h-5 text-[#D4AF37]" />
              Comparativa Directa: Cuchubal Tradicional vs. Cuchubal Formal S&M
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Entienda por qué formalizar su hábito de ahorro colectivo o individual marca la diferencia entre el riesgo total y la creación de patrimonio seguro.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.1] text-slate-400">
                  <th className="py-3 px-4 font-semibold">Criterio de Evaluación</th>
                  <th className="py-3 px-4 font-semibold text-rose-300 bg-rose-950/20 rounded-t-lg">Cuchubal Tradicional / Informal</th>
                  <th className="py-3 px-4 font-semibold text-[#D4AF37] bg-[#D4AF37]/10 rounded-t-lg">Cuchubal Formal S&M Capital</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-slate-300 font-light">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Respaldo Jurídico</td>
                  <td className="py-3.5 px-4 text-slate-400 bg-rose-950/10">Inexistente. Basado en "palabra" sin contrato civil ejecutable.</td>
                  <td className="py-3.5 px-4 text-emerald-300 bg-[#D4AF37]/5 font-medium">Contrato individual notariado con fuerza de ley en Guatemala.</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Generación de Rendimientos</td>
                  <td className="py-3.5 px-4 text-slate-400 bg-rose-950/10">0% de interés. El dinero pierde valor frente a la inflación anual.</td>
                  <td className="py-3.5 px-4 text-emerald-300 bg-[#D4AF37]/5 font-medium">Interés compuesto continuo con rentabilidad neta acumulativa.</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Riesgo de Quiebra o Fuga</td>
                  <td className="py-3.5 px-4 text-rose-400 bg-rose-950/10 font-medium">Alto: Si el organizador o un socio desaparece, se pierde el capital.</td>
                  <td className="py-3.5 px-4 text-emerald-300 bg-[#D4AF37]/5 font-medium">Cero: Custodia institucional individualizada con cuentas bancarizadas.</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-white">Bancarización e Historial</td>
                  <td className="py-3.5 px-4 text-slate-400 bg-rose-950/10">Efectivo en mano, no genera constancias bancarias formales.</td>
                  <td className="py-3.5 px-4 text-emerald-300 bg-[#D4AF37]/5 font-medium">Transferencias registradas útiles para comprobación patrimonial.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
