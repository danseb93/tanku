import React from 'react';
import { motion } from 'motion/react';
import { CreditCard } from 'lucide-react';

export default function StepPayment({ amount, paymentMethod, setPaymentMethod, isProcessingPayment, onProcessPayment, onBack }) {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-2xl border-4 border-slate-800 max-w-sm mx-auto relative overflow-hidden">
        <div className="absolute top-2 right-4 text-[10px] text-slate-500 tracking-widest font-mono">TANK❤️U POS v2.0</div>
        
        <div className="bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 p-4 rounded-2xl font-mono text-center mb-5 shadow-inner">
          <span className="text-[10px] block text-emerald-600 uppercase tracking-widest font-bold">Total a Pagar</span>
          <span className="text-2xl font-black tracking-tight">
            ${ amount.toLocaleString('es-CO') }
          </span>
        </div>

        <div className="space-y-2 mb-5">
          <label className="text-xs text-slate-400 block font-sans font-bold uppercase tracking-wider">Método de pago:</label>
          <div className="grid grid-cols-2 gap-2">
            {['card', 'epayco'].map((m) => (
              <button
                key={m}
                onClick={() => setPaymentMethod(m)}
                className={`py-2.5 text-xs font-black rounded-xl uppercase tracking-wider transition cursor-pointer ${paymentMethod === m ? 'bg-orange-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            disabled={isProcessingPayment}
            onClick={onProcessPayment}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            {isProcessingPayment ? (
              <span className="animate-pulse">Procesando pago seguro...</span>
            ) : (
              <>
                <CreditCard className="w-5 h-5" /> PAGAR AHORA
              </>
            )}
          </motion.button>

          {onBack && (
            <button 
              onClick={onBack}
              disabled={isProcessingPayment}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-2xl transition cursor-pointer"
            >
              ← Volver al paso anterior
            </button>
          )}
        </div>
      </div>
    </div>
  );
}