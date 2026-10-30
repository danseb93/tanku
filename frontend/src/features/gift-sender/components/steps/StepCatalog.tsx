import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface StepCatalogProps {
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function StepCatalog({ onBack, onSelectProduct }: StepCatalogProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Aquí puedes cambiar la URL por la ruta de tu API backend de NestJS (ej. 'http://localhost:3000/products')
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los productos');
        return res.json();
      })
      .then((data) => {
        // Si tu backend devuelve { data: [...] } ajusta esto según corresponda: data.data o data directamente
        const productList = data.data || data;
        setProducts(productList);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Volver
        </button>
        <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider">Catálogo Aliado</span>
      </div>

      {isLoading && (
        <div className="py-12 text-center">
          <div className="w-8 h-8 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-xs text-slate-500">Cargando productos del taller...</p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-600 text-xs rounded-2xl text-center">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className="max-h-[350px] overflow-y-auto space-y-3 pr-1">
          {products.map((prod) => (
            <motion.div 
              key={prod.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => onSelectProduct(prod)}
              className="p-3 bg-slate-50/80 hover:bg-amber-50/50 border-2 border-slate-100 hover:border-amber-300 rounded-2xl cursor-pointer transition flex items-center gap-3 shadow-xs"
            >
              <img src={prod.image} alt={prod.title} className="w-14 h-14 object-contain bg-white p-1 rounded-xl shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-xs text-slate-800 truncate">{prod.title}</h4>
                <p className="text-[11px] text-amber-600 font-extrabold mt-0.5">${prod.price.toLocaleString('es-CO')}</p>
                <span className="inline-block text-[9px] bg-slate-200/70 text-slate-600 px-2 py-0.5 rounded-full mt-1 font-medium">{prod.category}</span>
              </div>
              <ShoppingBag className="w-5 h-5 text-amber-500 shrink-0" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}