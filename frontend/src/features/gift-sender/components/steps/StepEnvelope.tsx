import React from 'react';
import { motion } from 'motion/react';
import { AFFECTIVE_BILLS } from '../../data/constants';

export default function StepEnvelope({ recipientName, envelopeAmount, setEnvelopeAmount, onBack, onNext }) {
  const handleAddBill = (value) => setEnvelopeAmount(prev => prev + value);

  return (
    <div className="space-y-5">
      <motion.div 
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 rounded-3xl p-6 text-white text-center shadow-xl relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <span className="text-[11px] font-extrabold uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full">
          Sobre para {recipientName}
        </span>
        <div className="my-3">
          <span className="text-4xl md:text-5xl font-black tracking-tight">$ {envelopeAmount.toLocaleString('es-CO')}</span>
          <span className="text-xs block text-pink-100 font-medium mt-1">Acumulado en el sobre de sueños</span>
        </div>
      </motion.div>

      <div>
        <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">Agrega billetes afectivos:</p>
        <div className="grid grid-cols-2 gap-3">
          {AFFECTIVE_BILLS.map((bill, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAddBill(bill.value)}
              className={`bg-gradient-to-r ${bill.color} text-white p-3.5 rounded-2xl shadow-md hover:shadow-lg transition text-left flex flex-col justify-between cursor-pointer`}
            >
              <span className="text-xl mb-1">{bill.icon}</span>
              <div>
                <div className="font-bold text-xs">{bill.label}</div>
                <div className="text-[11px] font-semibold opacity-95">+${bill.value.toLocaleString('es-CO')}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button onClick={onBack} className="w-1/3 py-3.5 border-2 border-slate-100 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-50 transition cursor-pointer">Atrás</button>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={envelopeAmount === 0} 
          onClick={onNext} 
          className="w-2/3 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 text-white font-bold rounded-2xl py-3.5 shadow-lg shadow-orange-500/25 transition text-sm cursor-pointer"
        >
          Continuar con sobre (${envelopeAmount.toLocaleString('es-CO')})
        </motion.button>
      </div>
    </div>
  );
}