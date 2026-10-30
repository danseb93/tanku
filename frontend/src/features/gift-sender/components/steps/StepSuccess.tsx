import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function StepSuccess({ invoiceId, recipient, amount, onRestart }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center space-y-5"
    >
      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <CheckCircle className="w-12 h-12" />
      </div>

      <div>
        <h3 className="text-xl font-black text-slate-800">¡Regalo Empacado con Éxito!</h3>
        <p className="text-xs text-slate-500 mt-1">Nidi y el equipo de Tank❤️U se encargarán del resto.</p>
      </div>

      <div className="bg-slate-50 border-2 border-slate-100 p-4 rounded-3xl text-left font-mono text-xs text-slate-600 space-y-1.5 shadow-sm">
        <div className="font-bold text-center border-b pb-2 mb-2 text-slate-800 text-sm tracking-wider">RECIBO TANK❤️U TALLER</div>
        <div>ID COMPRA: <span className="font-bold text-slate-900">{invoiceId}</span></div>
        <div>DESTINATARIO: <span className="font-bold text-slate-900">{recipient.name}</span></div>
        <div>OCASIÓN: <span className="font-bold text-slate-900">{recipient.occasion}</span></div>
        <div>TOTAL: <span className="font-bold text-emerald-600">${amount.toLocaleString('es-CO')}</span></div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onRestart} 
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-xl transition text-sm cursor-pointer"
      >
        Crear otra sorpresa
      </motion.button>
    </motion.div>
  );
}