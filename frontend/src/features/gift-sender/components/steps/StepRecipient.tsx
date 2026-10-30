import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function StepRecipient({ recipient, setRecipient, onNext }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
          ¿A quién quieres sorprender hoy?
        </label>
        <input 
          type="text" 
          placeholder="Ej. Camila, Mateo, Mamá..."
          value={recipient.name}
          onChange={(e) => setRecipient({ ...recipient, name: e.target.value })}
          className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-800 font-semibold text-lg transition shadow-inner"
        />
      </div>

      <div>
        <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
          ¿Cuál es la ocasión especial?
        </label>
        <select 
          value={recipient.occasion}
          onChange={(e) => setRecipient({ ...recipient, occasion: e.target.value })}
          className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-800 font-semibold text-base transition shadow-inner"
        >
          <option value="Cumpleaños">🎂 Cumpleaños</option>
          <option value="Amor y Amistad">💖 Amor y Amistad</option>
          <option value="Aniversario">🎉 Aniversario</option>
          <option value="Porque sí">✨ Porque sí (Sorpresa espontánea)</option>
        </select>
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={!recipient.name.trim()}
        onClick={onNext}
        className="w-full mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-40 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/25 transition flex items-center justify-center gap-2 text-base cursor-pointer"
      >
        Comenzar la Magia
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}