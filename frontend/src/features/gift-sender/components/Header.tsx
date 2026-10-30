import React from 'react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-6 text-center z-10"
    >
      <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-md border border-orange-200/80">
        <span className="text-2xl animate-bounce">🪹</span>
        <span className="font-black tracking-wider text-orange-600 text-lg">TANK❤️U</span>
        <span className="text-xs bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-2.5 py-0.5 rounded-full shadow-sm">
          Taller de Sueños
        </span>
      </div>
    </motion.header>
  );
}