import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';

interface Collaborator {
  name: string;
  email: string;
  amount: number;
}

interface StepCollaboratorsProps {
  addCollaborators: boolean;
  setAddCollaborators: (val: boolean) => void;
  collaborators: Collaborator[];
  setCollaborators: (collabs: Collaborator[]) => void;
  onNext: () => void;
  onBack: () => void; // <-- 1. Añadimos onBack a la interfaz
}

export default function StepCollaborators({ 
  addCollaborators, 
  setAddCollaborators, 
  collaborators, 
  setCollaborators, 
  onNext,
  onBack // <-- 2. Lo recibimos aquí
}: StepCollaboratorsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-amber-50/80 rounded-2xl border-2 border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-2.5">
          <Users className="w-5 h-5 text-amber-700" />
          <span className="text-sm font-bold text-amber-900">¿Invitar amigos o familia a la "vaca"?</span>
        </div>
        <input 
          type="checkbox" 
          checked={addCollaborators} 
          onChange={(e) => setAddCollaborators(e.target.checked)} 
          className="w-5 h-5 accent-orange-500 rounded-lg cursor-pointer"
        />
      </div>

      {addCollaborators && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-3 bg-slate-50 p-4 rounded-2xl border-2 border-slate-100">
          <p className="text-xs text-slate-500 font-medium">Agrega participantes y el valor que aportará cada uno:</p>
          {collaborators.map((c, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input 
                type="text" placeholder="Nombre" value={c.name} 
                onChange={(e) => { const nc = [...collaborators]; nc[i].name = e.target.value; setCollaborators(nc); }}
                className="w-1/3 px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-medium"
              />
              <input 
                type="text" placeholder="Email / Tel" value={c.email} 
                onChange={(e) => { const nc = [...collaborators]; nc[i].email = e.target.value; setCollaborators(nc); }}
                className="w-1/3 px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-medium"
              />
              <input 
                type="number" placeholder="Valor ($)" value={c.amount || ''} 
                onChange={(e) => { const nc = [...collaborators]; nc[i].amount = Number(e.target.value); setCollaborators(nc); }}
                className="w-1/3 px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-medium"
              />
            </div>
          ))}
          <button 
            onClick={() => setCollaborators([...collaborators, { name: '', email: '', amount: 0 }])}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 pt-1 flex items-center gap-1 cursor-pointer"
          >
            + Agregar otro participante
          </button>
        </motion.div>
      )}

      {/* 3. Agregamos el contenedor con los dos botones (Atrás y Continuar) */}
      <div className="flex gap-2 pt-2">
        <button 
          onClick={onBack} 
          className="w-1/3 py-3.5 border-2 border-slate-100 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-50 transition cursor-pointer"
        >
          Atrás
        </button>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext} 
          className="w-2/3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-orange-500/25 transition text-sm cursor-pointer"
        >
          Continuar al Pago
        </motion.button>
      </div>
    </div>
  );
}