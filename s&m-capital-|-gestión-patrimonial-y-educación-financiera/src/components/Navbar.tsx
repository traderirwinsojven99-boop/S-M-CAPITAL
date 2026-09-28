import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Planes de Inversión', href: '#planes' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Centro Educativo', href: '#educacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#080B10]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3.5'
          : 'bg-[#080B10]/80 backdrop-blur-sm border-b border-white/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="S&M Capital - Inicio"
          >
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
              S&M <span className="text-[#D4AF37]">CAPITAL</span>
            </span>
          </a>

          {/* Zone 2: 4–6 nav links with single-line text and subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#E6CA65] via-[#D4AF37] to-[#B89228] hover:from-[#F3E5AB] hover:to-[#D4AF37] rounded-md transition-all duration-200 shadow-md shadow-[#D4AF37]/15 hover:shadow-lg hover:shadow-[#D4AF37]/25 cursor-pointer whitespace-nowrap"
            >
              <span>Agendar Asesoría</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/[0.08] space-y-1 bg-[#0A0E17]/95 rounded-lg p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E6CA65] rounded-md transition-colors"
              >
                Agendar Asesoría Privada
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
