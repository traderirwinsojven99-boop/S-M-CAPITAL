import React from 'react';
import { ShieldCheck, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="inline-block">
              <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                S&M <span className="text-[#D4AF37]">CAPITAL</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-light">
              Firma especializada en gestión patrimonial de capital, análisis técnico independiente de mercados y formalización de ahorro con contratos legales notariados.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparencia, Legalidad & Protección del Inversionista</span>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              Navegación
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">Nuestra Historia</a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">Planes de Inversión</a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">Calculadora de Rendimientos</a>
              </li>
              <li>
                <a href="#educacion" className="hover:text-white transition-colors">Centro Educativo & Blog</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto Corporativo</a>
              </li>
            </ul>
          </div>

          {/* Investment Modalities Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              Soluciones
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#planes" className="hover:text-white transition-colors">Modalidad A: Capital Único</a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">Modalidad B: Cuchubal Formal</a>
              </li>
              <li>
                <a href="#educacion" className="hover:text-white transition-colors">Guía Anti-Estafas</a>
              </li>
              <li>
                <a href="#educacion" className="hover:text-white transition-colors">Análisis TradingView</a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">Simulador de Interés Compuesto</a>
              </li>
            </ul>
          </div>

          {/* Location & Legal Headquarters */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              Sede Central
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Diagonal 6, Zona 15, Vista Hermosa I, Ciudad de Guatemala.</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>info@smcapital.gt</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                >
                  <ArrowUp className="w-3 h-3" />
                  <span>Volver al inicio</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Regulatory Sub-Strip */}
        <div className="pt-8 border-t border-white/[0.06] space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed font-light">
            <strong>Aviso de Cumplimiento Normativo:</strong> S&M Capital opera conforme al marco del derecho civil y mercantil de la República de Guatemala mediante contratos privados de mutuo con legalización notarial de firmas. Los rendimientos generados por la operativa en divisas y activos de cobertura conllevan volatilidad inherente de los mercados internacionales. Toda la información presentada en esta plataforma tiene fines pedagógicos, explicativos y de relación directa con nuestros comitentes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © {new Date().getFullYear()} S&M Capital. Todos los derechos reservados. Ciudad de Guatemala.
            </div>
            <div className="flex items-center gap-4">
              <span>Términos Contractuales</span>
              <span aria-hidden="true">·</span>
              <span>Política de Privacidad & KYC</span>
              <span aria-hidden="true">·</span>
              <span>Protección al Consumidor</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
