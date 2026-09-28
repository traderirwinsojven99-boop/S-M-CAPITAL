import React from 'react';
import { EducationalArticle } from '../types/index.ts';
import { X, CheckCircle, BookOpen, Clock, Calendar } from 'lucide-react';

interface EducationalModalProps {
  article: EducationalArticle | null;
  onClose: () => void;
}

export const EducationalModal: React.FC<EducationalModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E1420] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 bg-[#0B0F19] border-b border-white/[0.08] flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-snug">
              {article.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-500" />
                {article.readTime}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-500" />
                {article.publishedDate}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300 font-medium">{article.author}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar artículo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
          
          {/* Introductory highlight */}
          <div className="p-4 rounded-xl bg-[#090D14] border-l-2 border-[#D4AF37] text-slate-200 italic font-normal">
            {article.content.intro}
          </div>

          {/* Detailed Sections */}
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3 pt-2">
              <h4 className="font-cinzel text-lg font-bold text-white">
                {sec.heading}
              </h4>
              {sec.body.map((par, pIdx) => (
                <p key={pIdx} className="text-slate-300">
                  {par}
                </p>
              ))}
            </div>
          ))}

          {/* Key Takeaways */}
          <div className="mt-8 p-5 rounded-xl bg-[#121A2B] border border-white/[0.08] space-y-3">
            <h5 className="font-semibold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              Conclusiones Clave para el Inversionista:
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {article.content.takeaways.map((item, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0B0F19] border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            S&M Capital · Educación e Integridad Financiera
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E6CA65] rounded-lg transition-colors cursor-pointer"
          >
            Cerrar Artículo
          </button>
        </div>

      </div>
    </div>
  );
};
