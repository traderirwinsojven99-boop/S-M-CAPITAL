import React from 'react';
import { Eye, ShieldAlert, Award, FileCheck2, Binary, CheckCircle2 } from 'lucide-react';

export const AboutStory: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 lg:py-28 bg-[#090D14] border-t border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Nuestra Historia & Propósito</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Origen de la Firma</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Nacidos de la superación, guiados por el gráfico y comprometidos con la verdad.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            S&M Capital no nació en una sala de juntas convencional, sino de una convicción inquebrantable: poner fin a los engaños financieros en Centroamérica mediante el análisis técnico honesto y la transparencia jurídica.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Visual card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0E1523] shadow-xl group">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/sm_technical_analysis_1790534493002.jpg"
                  alt="Análisis técnico independiente en TradingView por analista senior de S&M Capital"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B101A] via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-5 bg-[#0B101A] border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-cinzel font-semibold text-slate-200">El Gráfico no Miente</span>
                  <span className="font-mono text-[#D4AF37]">TradingView Verified</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Operamos con lecturas de acción del precio, fractalidad y liquidez institucional, rechazando indicadores milagrosos y robots sin respaldo humano.
                </p>
              </div>
            </div>
          </div>

          {/* Deep Narrative Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                A lo largo de los últimos años, fuimos testigos directos de cómo la desinformación financiera y la falta de educación causaron estragos en miles de familias guatemaltecas y latinoamericanas. Plataformas que desaparecían de la noche a la mañana, supuestas "academias" que en realidad eran pirámides multinivel y falsos gurús que jamás mostraron una gráfica real ni una orden auditada.
              </p>
              <p>
                Esa frustración se convirtió en nuestro combustible. Decidimos construir una firma cimentada en lo opuesto: <strong className="text-white font-medium">la verdad desnuda de los mercados</strong>. Aprendimos que el único lenguaje universal es el del gráfico técnico (Price Action y TradingView), donde la oferta y la demanda institucional dejan huellas inequívocas.
              </p>
              <p>
                Hoy, S&M Capital se erige como un <strong className="text-[#D4AF37] font-medium">faro de transparencia y escudo protector</strong> para empresarios, profesionales y ahorrantes que desean preservar su capital con serenidad, con contratos legales en mano y con la certeza de que su dinero es gestionado por manos técnicas y responsables.
              </p>
            </div>

            {/* Quick check pills */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Auditoría continua de riesgo de mercado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Independencia total de redes multinivel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Sede física en Zona 15, Ciudad de Guatemala</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Educación financiera abierta para clientes</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Integrity (Bento style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-xl bg-[#0D131F] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-1">01. PILAR ÉTICO</div>
            <h3 className="text-base font-semibold text-white mb-2">Escudo Anti-Fraude</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Protegemos a la comunidad alertando y educando sobre pirámides, bots fraudulentos y promesas de retornos ficticios.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D131F] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
              <Binary className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-1">02. PILAR TÉCNICO</div>
            <h3 className="text-base font-semibold text-white mb-2">Análisis de Gráficos</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nuestras decisiones se fundamentan en estructuras de mercado reales en TradingView, liquidez interbancaria y gestión asimétrica.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D131F] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-1">03. PILAR LEGAL</div>
            <h3 className="text-base font-semibold text-white mb-2">Contratos Notariados</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cada operación y aporte está sustentado por contratos civiles y mercantiles de mutuo con fe notarial legal en Guatemala.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D131F] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 mb-1">04. PILAR DE TRANSPARENCIA</div>
            <h3 className="text-base font-semibold text-white mb-2">Cuentas Claras</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reportes periódicos detallados sin letra pequeña. Lo que ve en su estado de cuenta es exactamente la realidad matemática de sus fondos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
