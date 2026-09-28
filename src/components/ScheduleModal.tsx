import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Video, CheckCircle2, Shield } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [meetingType, setMeetingType] = useState<'presencial' | 'virtual'>('presencial');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-02');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0E1524] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="py-6 text-center space-y-5 animate-in fade-in">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-cinzel text-xl font-bold text-white">
                Asesoría Confirmada
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Hemos reservado su sesión {meetingType === 'presencial' ? 'presencial en Zona 15, Ciudad de Guatemala' : 'virtual confidencial por videoconferencia'} para el {selectedDate} a las {selectedTime}.
              </p>
            </div>
            <div className="p-3 bg-[#090D15] rounded-lg border border-white/[0.06] text-xs text-slate-400">
              Le remitiremos los accesos y protocolo de ingreso a su correo y WhatsApp.
            </div>
            <button
              onClick={() => {
                setIsBooked(false);
                onClose();
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E6CA65] rounded-lg transition-colors cursor-pointer"
            >
              Finalizar
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>Atención Privada y Exclusiva</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                Agendar Asesoría Patrimonial
              </h3>
              <p className="text-xs text-slate-400">
                Seleccione la modalidad de su preferencia y reserve su espacio con un asesor senior.
              </p>
            </div>

            {/* Meeting Type Selector */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() => setMeetingType('presencial')}
                className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                  meetingType === 'presencial'
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-sm'
                    : 'bg-[#090D15] border-white/[0.08] text-slate-400 hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold">Presencial (Zona 15)</div>
                  <div className="text-[10px] text-slate-400">Torre Corporativa, GT</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMeetingType('virtual')}
                className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                  meetingType === 'virtual'
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-sm'
                    : 'bg-[#090D15] border-white/[0.08] text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold">Virtual (Google Meet)</div>
                  <div className="text-[10px] text-slate-400">Sesión 100% privada</div>
                </div>
              </button>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#D4AF37]" /> Fecha tentativa
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#090D15] border border-white/[0.1] text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#D4AF37]" /> Horario disponible
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#090D15] border border-white/[0.1] text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>
            </div>

            {/* Client info */}
            <div className="space-y-3 pt-1">
              <input
                type="text"
                required
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="email"
                  required
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#090D15] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#E6CA65] via-[#D4AF37] to-[#B89228] hover:from-[#F3E5AB] hover:to-[#D4AF37] rounded-lg transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/15"
            >
              Confirmar Reserva de Asesoría
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
