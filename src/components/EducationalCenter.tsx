import React, { useState } from 'react';
import { EDUCATIONAL_ARTICLES } from '../data/financialContent.ts';
import { EducationalArticle } from '../types/index.ts';
import { EducationalModal } from './EducationalModal.tsx';
import { BookOpen, ArrowRight, ShieldCheck, GraduationCap } from 'lucide-react';

export const EducationalCenter: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<EducationalArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los Artículos' },
    { id: 'Estructura de Mercados', label: 'Mercado Forex' },
    { id: 'Preservación de Capital', label: 'Gestión de Riesgo' },
    { id: 'Defensa del Inversor', label: 'Anti-Fraude' },
    { id: 'Cultura de Ahorro', label: 'Cuchubal Formal' },
  ];

  const filteredArticles =
    activeCategory === 'all'
      ? EDUCATIONAL_ARTICLES
      : EDUCATIONAL_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <section id="educacion" className="py-20 lg:py-28 bg-[#07090E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Centro de Conocimiento Financiero</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Educación Abierta</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Aprenda a proteger su patrimonio y comprender el mercado real.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              La mayor defensa contra las estafas financieras es el conocimiento técnico fundamentado. Compartimos abiertamente nuestros criterios institucionales.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0E1523] border border-white/[0.08] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Educational Spotlight Card */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-[#0C121E] via-[#0E1726] to-[#0A0F19] border border-white/[0.1] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>MANIFIESTO INSTITUCIONAL DE TRANSPARENCIA</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-snug">
              ¿Por qué el 90% de los principiantes pierden dinero en Forex y cómo operamos en S&M Capital?
            </h3>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Descubra la brecha entre apostar a corto plazo y administrar carteras con ratios asimétricos de riesgo/beneficio 1:2 o 1:3, control de drawdown máximo del 1.5% por operación y análisis de liquidez institucional.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSelectedArticle(EDUCATIONAL_ARTICLES[0])}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] cursor-pointer group"
              >
                <span>Leer artículo completo de estructura interbancaria</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-full min-h-[220px] relative overflow-hidden bg-slate-900 border-t lg:border-t-0 lg:border-l border-white/[0.08]">
            <img
              src="/src/assets/images/sm_education_risk_1790534502580.jpg"
              alt="Mesa de análisis y asesoría transparente de S&M Capital"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0C121E] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="rounded-2xl bg-[#0D1422] border border-white/[0.08] hover:border-[#D4AF37]/40 p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer group shadow-lg hover:shadow-2xl hover:shadow-black/60"
            >
              <div className="space-y-4">
                
                {/* Clean unboxed metadata with typographic separators (anti-slop rule) */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-[#D4AF37] font-medium">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h4 className="font-cinzel text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-400">{article.publishedDate}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#D4AF37] group-hover:text-white transition-colors">
                  <span>Leer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      <EducationalModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
