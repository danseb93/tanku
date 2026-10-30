import React from 'react';
import { motion } from 'motion/react';

export default function HostNidi({ step, recipientName }) {
  const getMessage = () => {
    switch (step) {
      case 1: return "¡Hola! Bienvenido al taller de Tank❤️U. Aquí empacamos sueños, no simples objetos.";
      case 2: return `¡Perfecto! Vamos a diseñar la sorpresa para ${recipientName || 'tu persona especial'}.`;
      case 20: return "Arma un sobre con billetes afectivos. ¡Cada aporte tiene un significado único!";
      case 21: return "Usa mi lupa mágica de IA para descubrir qué le apasiona de verdad en redes.";
      case 3: return "¿Quieres que amigos o familia se sumen a esta 'vaca' para hacer el regalo más grande?";
      case 4: return "¡Todo listo! Pasa tu tarjeta por el datáfono interactivo de Tank❤️U.";
      case 5: return "¡Magia completada! Tu regalo va en camino a convertirse en una experiencia inolvidable.";
      default: return "¡Sigamos creando magia!";
    }
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex items-center gap-4 mb-6 bg-gradient-to-r from-orange-50 to-amber-50/60 p-4 rounded-2xl border border-orange-100 shadow-sm"
    >
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-3xl shadow-lg shrink-0 text-white"
      >
        🧸
      </motion.div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Nidi · Tu Anfitrión</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
        <p className="text-sm md:text-base font-semibold text-slate-700 leading-snug mt-0.5">
          {getMessage()}
        </p>
      </div>
    </motion.div>
  );
}