/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MarketTicker } from './components/MarketTicker.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutStory } from './components/AboutStory.tsx';
import { InvestmentPlans } from './components/InvestmentPlans.tsx';
import { YieldCalculator } from './components/YieldCalculator.tsx';
import { EducationalCenter } from './components/EducationalCenter.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ScheduleModal } from './components/ScheduleModal.tsx';
import { Currency, PlanType } from './types/index.ts';

export default function App() {
  const [selectedPlanForCalc, setSelectedPlanForCalc] = useState<PlanType>('MODALIDAD_A');
  const [calculatorCurrency, setCalculatorCurrency] = useState<Currency>('USD');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [prefilledSimulation, setPrefilledSimulation] = useState<{
    plan: PlanType;
    currency: string;
    amount: number;
    months: number;
    finalBalance: number;
  } | null>(null);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlanForCalc = (plan: PlanType, currency: Currency) => {
    setSelectedPlanForCalc(plan);
    setCalculatorCurrency(currency);
    scrollToSection('calculadora');
  };

  const handlePreApproveQuote = (summary: {
    plan: PlanType;
    currency: Currency;
    amount: number;
    months: number;
    totalContributed: number;
    projectedYield: number;
    finalBalance: number;
    monthlyRate: number;
  }) => {
    setPrefilledSimulation({
      plan: summary.plan,
      currency: summary.currency,
      amount: summary.amount,
      months: summary.months,
      finalBalance: summary.finalBalance,
    });
    scrollToSection('contacto');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090E] text-slate-100 font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Real-time market tick bar */}
      <MarketTicker />

      {/* Top Bar Navigation */}
      <Navbar onOpenSchedule={() => setIsScheduleOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePlans={() => scrollToSection('planes')}
          onGoToCalculator={() => scrollToSection('calculadora')}
        />

        {/* 2. Quiénes Somos / Nuestra Historia */}
        <AboutStory />

        {/* 3. Planes de Inversión (Modalidad A y Modalidad B / Cuchubal Formal) */}
        <InvestmentPlans
          onSelectPlanForCalc={handleSelectPlanForCalc}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />

        {/* 4. Calculadora Interactiva de Rendimientos */}
        <YieldCalculator
          selectedPlan={selectedPlanForCalc}
          onPlanChange={setSelectedPlanForCalc}
          currency={calculatorCurrency}
          onCurrencyChange={setCalculatorCurrency}
          onPreApproveQuote={handlePreApproveQuote}
        />

        {/* 5. Centro Educativo / Blog */}
        <EducationalCenter />

        {/* 6. Contacto & Presencia Física en Zona 15 */}
        <ContactSection prefilledSimulation={prefilledSimulation} />
      </main>

      {/* Institutional Quiet Footer */}
      <Footer />

      {/* Modal for In-Person / Virtual Private Consultation */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </div>
  );
}
