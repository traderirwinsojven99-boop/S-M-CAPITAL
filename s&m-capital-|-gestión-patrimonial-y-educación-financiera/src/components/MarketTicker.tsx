import React, { useState, useEffect } from 'react';
import { INITIAL_QUOTES } from '../data/financialContent.ts';
import { MarketQuote } from '../types/index.ts';
import { TrendingUp, TrendingDown, ShieldCheck } from 'lucide-react';

export const MarketTicker: React.FC = () => {
  const [quotes, setQuotes] = useState<MarketQuote[]>(INITIAL_QUOTES);

  // Micro-fluctuation simulation to give institutional live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setQuotes((prev) =>
        prev.map((quote) => {
          // slight random tick every 6-8 seconds
          if (Math.random() > 0.4) {
            const factor = (Math.random() - 0.48) * 0.001;
            const newPrice = Number((quote.price * (1 + factor)).toFixed(quote.symbol.includes('JPY') || quote.symbol.includes('XAU') ? 2 : 4));
            const newChange = Number((quote.change + factor * 50).toFixed(2));
            return {
              ...quote,
              price: newPrice,
              change: newChange,
              isPositive: newChange >= 0,
            };
          }
          return quote;
        })
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside aria-label="Cotizaciones de mercado" className="bg-[#05070B] border-b border-white/[0.06] text-xs py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-400 text-[11px] shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-medium text-slate-300">S&M Capital · Mesa de Operaciones</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">Guatemala & Mercados Globales</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto w-full md:w-auto scrollbar-none py-0.5 justify-start md:justify-end text-[11px] font-mono tabular-nums">
          {quotes.map((q) => (
            <div key={q.symbol} className="flex items-center gap-1.5 shrink-0">
              <span className="text-slate-400 font-semibold">{q.symbol}</span>
              <span className="text-slate-200 font-medium">
                {q.symbol.includes('GTQ') ? `Q${q.price.toFixed(2)}` : q.symbol.includes('XAU') ? `$${q.price.toFixed(2)}` : q.price.toFixed(4)}
              </span>
              <span className={`inline-flex items-center text-[10px] ${q.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {q.isPositive ? <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> : <TrendingDown className="w-2.5 h-2.5 mr-0.5" />}
                {q.isPositive ? `+${q.change}%` : `${q.change}%`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
