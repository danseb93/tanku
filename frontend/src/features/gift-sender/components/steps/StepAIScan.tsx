import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Search } from 'lucide-react';
import { DEMO_PROFILES } from '../../data/constants';

export default function StepAIScan({ isScanning, aiRecommendation, onStartScan, onResetScan, onNext, onBack }) {
  return (
    <div className="space-y-4">
      {!isScanning && !aiRecommendation && (
        <>
          <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Perfiles de prueba sugeridos:</p>
          <div className="space-y-2.5">
            {DEMO_PROFILES.map((prof) => (
              <motion.div 
                key={prof.id} 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onStartScan(prof)}
                className="p-3.5 rounded-2xl border-2 border-slate-100 hover:border-purple-300 bg-slate-50/80 hover:bg-purple-50/40 cursor-pointer transition flex items-center justify-between shadow-xs"
              >
                <div>
                  <span className="font-bold text-sm text-purple-700">{prof.handle}</span>
                  <div className="flex gap-1 mt-1.5">
                    {prof.tags.map((t, i) => (
                      <span key={i} className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-purple-500" />
              </motion.div>
            ))}
          </div>
          <button onClick={onBack} className="w-full mt-2 py-3 text-xs font-bold text-slate-400 hover:text-slate-600 transition cursor-pointer">
            ← Volver al paso anterior
          </button>
        </>
      )}

      {isScanning && (
        <div className="py-12 text-center space-y-4">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin"></div>
            <Search className="w-7 h-7 text-purple-600 absolute inset-0 m-auto animate-pulse" />
          </div>
          <div>
            <h4 className="font-bold text-purple-900 text-base">Escaneando gustos y pasiones...</h4>
            <p className="text-xs text-slate-500 mt-1">La IA de Tank❤️U está conectando intereses con marcas aliadas.</p>
          </div>
        </div>
      )}

      {aiRecommendation && (
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-4">
          <div className="bg-purple-50/80 border-2 border-purple-200/80 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
              <Sparkles className="w-4 h-4" /> Recomendación Inteligente Tank❤️U
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mt-1.5">{aiRecommendation.product}</h3>
            <p className="text-base font-extrabold text-orange-600 mt-0.5">$ {aiRecommendation.price.toLocaleString('es-CO')}</p>
            <p className="text-xs text-slate-600 mt-2.5 bg-white p-3 rounded-2xl border border-purple-100 italic leading-relaxed">
              "{aiRecommendation.reason}"
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={onResetScan} className="w-1/3 py-3.5 border-2 border-slate-100 text-slate-600 rounded-2xl font-bold text-sm cursor-pointer">Cambiar</button>
            <button onClick={onNext} className="w-2/3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl py-3.5 shadow-lg shadow-purple-600/25 transition text-sm cursor-pointer">Elegir este Regalo</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}