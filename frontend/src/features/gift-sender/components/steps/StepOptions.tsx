import React from "react";
import { motion } from "motion/react";
import { Heart, Sparkles, Gift } from "lucide-react";

interface StepOptionsProps {
  setStep: (step: number) => void;
  recipientName: string;
}

export default function StepOptions({
  setStep,
  recipientName,
}: StepOptionsProps) {
  const displayName =
    recipientName && recipientName.trim() !== ""
      ? recipientName
      : "tu persona especial";

  const options = [
    {
      id: 20,
      title: "Opción A: El Sobre Afectivo",
      desc: `Armemos un sobre para que ${displayName} compre su sueño.`,
      icon: Heart,
      color: "text-pink-600 bg-pink-100 border-pink-200",
    },
    {
      id: 21,
      title: "Opción B: Escaneo IA de Gustos",
      desc: "Analizamos perfiles de redes simulados para atinarle al regalo ideal.",
      icon: Sparkles,
      color: "text-purple-600 bg-purple-100 border-purple-200",
    },
    {
      id: "cat",
      title: "Opción C: Explorar Catálogo",
      desc: "Elige directamente de nuestra curaduría de marcas aliadas.",
      icon: Gift,
      color: "text-amber-600 bg-amber-100 border-amber-200",
    },
  ];

  return (
    <div className="space-y-3">
      {options.map((opt, idx) => {
        const Icon = opt.icon;
        return (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              opt.id === "cat"
                ? setStep("cat" as any)
                : setStep(opt.id as number)
            }
            className="w-full p-4 rounded-2xl border-2 border-slate-100 hover:border-orange-300 bg-slate-50/60 hover:bg-white transition text-left flex items-start gap-4 shadow-sm group cursor-pointer"
          >
            <div
              className={`p-3 rounded-xl ${opt.color} group-hover:scale-110 transition shrink-0`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base group-hover:text-orange-600 transition">
                {opt.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                {opt.desc}
              </p>
            </div>
          </motion.button>
        );
      })}

      <button
        onClick={() => setStep(1)}
        className="w-full mt-2 py-3 text-xs font-bold text-slate-400 hover:text-slate-600 transition cursor-pointer"
      >
        ← Volver al paso anterior
      </button>
    </div>
  );
}
