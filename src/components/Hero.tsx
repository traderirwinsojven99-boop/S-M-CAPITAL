import React from 'react';
import { ArrowRight, ShieldCheck, Scale, LineChart, FileText } from 'lucide-react';

interface HeroProps {
  onExplorePlans: () => void;
  onGoToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePlans, onGoToCalculator }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/[0.04] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Clear Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed subtle kicker (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#D4AF37] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Firma Privada de Gestión Patrimonial</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Guatemala & Región</span>
            </div>

            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Gestión profesional de capital y educación financiera <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89228]">transparente</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Protegemos y hacemos crecer su patrimonio mediante análisis técnico riguroso de mercados globales, contratos de mutuo notariados y un rechazo categórico a los esquemas especulativos y fraudulentos.
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Contratos privados con validez legal notariada</span>
              </div>
              <div className="flex items-start gap-2.5">
                <LineChart className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Operativa sustentada en gráficos reales TradingView</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Scale className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Gestión de riesgo institucional (Drawdown controlado)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Cero esquemas multinivel o comisiones por reclutar</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onExplorePlans}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#E6CA65] via-[#D4AF37] to-[#B89228] hover:from-[#F3E5AB] hover:to-[#D4AF37] rounded-lg transition-all duration-200 shadow-lg shadow-[#D4AF37]/15 cursor-pointer whitespace-nowrap"
              >
                <span>Conocer Planes de Inversión</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGoToCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-[#D4AF37]/40 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Simular Rendimientos en Vivo</span>
              </button>
            </div>

            {/* Unboxed institutional proof metrics */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Formalidad Notarial</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#D4AF37] tabular-nums">1.5% max</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Riesgo por Operación</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">Zona 15</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Presencia Física en GT</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Institutional Depth */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0E1420] shadow-2xl shadow-black/80 group">
              <div className="aspect-[16/10] sm:aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/sm_hero_trading_suite_1790534481944.jpg"
                  alt="Mesa de operaciones institucional y análisis de mercados financieros de S&M Capital"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    // Fallback container in case of unexpected image issue
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Inset institutional credentials strip */}
              <div className="p-4 sm:p-5 bg-[#0D131F] border-t border-white/[0.08] flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-white tracking-wide font-cinzel">S&M Capital · Mesa Técnica</div>
                  <div className="text-[11px] text-slate-400">Análisis técnico de estructura y liquidez interbancaria</div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded text-[10px] font-mono text-[#E6CA65] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>MERCADO ACTIVO</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
