import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, CheckCircle2, Building, ExternalLink } from 'lucide-react';
import { PlanType } from '../types/index.ts';

interface ContactSectionProps {
  prefilledSimulation?: {
    plan: PlanType;
    currency: string;
    amount: number;
    months: number;
    finalBalance: number;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledSimulation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    planInterest: prefilledSimulation ? prefilledSimulation.plan : 'MODALIDAD_A',
    capitalRange: prefilledSimulation ? `${prefilledSimulation.currency} ${Math.round(prefilledSimulation.amount).toLocaleString()}` : 'Q500 - Q50,000 GTQ',
    message: prefilledSimulation
      ? `Deseo recibir asesoría y formalización contractual para la ${prefilledSimulation.plan === 'MODALIDAD_A' ? 'Modalidad A (Capital Único)' : 'Modalidad B (Cuchubal Formal)'}, con proyección de ${prefilledSimulation.currency} ${Math.round(prefilledSimulation.finalBalance).toLocaleString()} en ${prefilledSimulation.months} meses.`
      : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ referenceNumber: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate immediate, secure processing
    setTimeout(() => {
      const randomCode = 'SM-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({ referenceNumber: randomCode });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#090D14] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>Atención Privada & Presencia Física</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Zona 15, Ciudad de Guatemala</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Contáctenos para una asesoría patrimonial confidencial y personalizada.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Inicie el diálogo con un asesor senior. Atendemos consultas digitales y reuniones ejecutivas en nuestra sede corporativa.
          </p>
        </div>

        {/* Contact Grid: Form (Left) & Direct Channels / Physical Location (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Secure Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0E1524] border border-white/[0.1] p-6 sm:p-8 shadow-xl">
              
              {submittedData ? (
                <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                      Solicitud Radicada Exitosamente
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                      Su expediente ha sido asignado a la Dirección de Cumplimiento y Asesoría Patrimonial. Nos comunicaremos de manera confidencial en menos de 24 horas hábiles.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#090D15] border border-white/[0.08] inline-block font-mono text-xs text-slate-300">
                    <span className="text-slate-500 block text-[10px]">CÓDIGO DE RADICACIÓN CONFIDENCIAL:</span>
                    <span className="text-[#D4AF37] font-bold text-base tracking-wider">{submittedData.referenceNumber}</span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/50245891234?text=Hola%20S%26M%20Capital,%20he%20radicado%20el%20expediente%20${submittedData.referenceNumber}%20y%20deseo%20dar%20seguimiento%20inmediato.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continuar por WhatsApp Inmediato</span>
                    </a>
                    
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
                      Formulario de Contacto Seguro
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Cifrado y Estricta Confidencialidad</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Lic. Carlos Méndez"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+502 5555-5555"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Modalidad de Interés *
                      </label>
                      <select
                        value={formData.planInterest}
                        onChange={(e) => setFormData({ ...formData, planInterest: e.target.value as PlanType })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#090D15] border border-white/[0.1] text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="MODALIDAD_A">Modalidad A: Gestión de Capital Único</option>
                        <option value="MODALIDAD_B">Modalidad B: Ahorro Programado (Cuchubal Formal)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Rango de Capital Estimado o Capacidad Mensual
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Q5,000 GTQ inicial o Q500 GTQ mensual"
                      value={formData.capitalRange}
                      onChange={(e) => setFormData({ ...formData, capitalRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Mensaje o Especificaciones Particulares
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describa sus objetivos patrimoniales o dudas legales sobre los contratos notariados..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#E6CA65] via-[#D4AF37] to-[#B89228] hover:from-[#F3E5AB] hover:to-[#D4AF37] rounded-lg transition-all duration-200 cursor-pointer shadow-lg shadow-[#D4AF37]/15 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Procesando solicitud segura...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitud Confidencial</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Channels & Physical Presence in Zona 15 */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Instant Channels Card */}
            <div className="rounded-2xl bg-[#0E1524] border border-white/[0.1] p-6 space-y-4">
              <h3 className="font-cinzel text-base font-bold text-white">
                Canales Directos de Atención
              </h3>

              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/50245891234?text=Hola%20S%26M%20Capital,%20deseo%20solicitar%20información%20sobre%20sus%20Planes%20de%20Inversión."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#090D15] border border-white/[0.06] hover:border-[#25D366]/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#25D366] transition-colors">
                        WhatsApp Institucional
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">+502 4589-1234</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/SMCapitalGT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#090D15] border border-white/[0.06] hover:border-blue-400/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Canal Exclusivo de Análisis (Telegram)
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">@SMCapitalGT</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Email */}
                <a
                  href="mailto:info@smcapital.gt"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#090D15] border border-white/[0.06] hover:border-[#D4AF37]/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                        Correo Corporativo
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">info@smcapital.gt</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Physical Headquarters in Zona 15 Card */}
            <div className="rounded-2xl bg-[#0E1524] border border-white/[0.1] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white font-cinzel">
                  <Building className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sede Corporativa Física</span>
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                  ZONA 15, GUATEMALA
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300 font-light leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium">Torre Corporativa 15 / Design Center</strong>
                    <p className="text-slate-400">Diagonal 6, 12-42, Zona 15, Vista Hermosa I, Ciudad de Guatemala, C.A.</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#090D15] border border-white/[0.06] text-[11px] text-slate-400 space-y-1">
                  <span className="font-semibold text-slate-300 block">Protocolo de Atención Personalizada:</span>
                  <p>
                    Por motivos de seguridad y debida diligencia patrimonial (AML/KYC), la atención en nuestras oficinas ejecutivas se realiza exclusivamente previa cita confirmada con su asesor asignado.
                  </p>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-white/[0.06]">
                  <span>Horario de Atención:</span>
                  <span className="text-slate-200">Lun - Vie: 08:30 - 17:30</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
