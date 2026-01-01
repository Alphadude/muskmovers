
import React, { useEffect, useState } from 'react';
import { generateBrandDescription } from '../services/geminiService';

const Introduction: React.FC = () => {
  const [description, setDescription] = useState('Loading brand philosophy...');

  useEffect(() => {
    const fetchDesc = async () => {
      const text = await generateBrandDescription(
        "A heavy equipment marketplace that curates industrial machinery for hire and manages the complete end-to-end logistics of delivery and retrieval for global enterprises."
      );
      setDescription(text);
    };
    fetchDesc();
  }, []);

  return (
    <div className="max-w-4xl animate-in fade-in duration-700">
      <header className="mb-12 border-b border-brand-gray-100 dark:border-brand-gray-800 pb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter dark:text-white uppercase text-brand-blue">
          Introduction
        </h1>
        <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 leading-relaxed max-w-3xl">
          The Musk Mover Design System is our definitive guide to engineering excellence. 
          We bridge the gap between heavy industry machinery and the precise logistics required to move the world's most critical assets.
        </p>
      </header>

      <div className="mb-16">
        <div className="relative overflow-hidden rounded-sm shadow-xl group border border-brand-gray-100 dark:border-brand-gray-800">
          <img 
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop" 
            alt="Musk Mover Maritime Logistics - Massive Container Vessel" 
            className="w-full h-[350px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent">
            <div className="inline-block px-4 py-1.5 bg-brand-orange text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-4">
              Integrated Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">
              Machinery & Movement
            </h2>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em] mb-4">The Vision</h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 dark:text-white uppercase tracking-tight">Brand Philosophy</h3>
            <div className="bg-brand-gray-50 dark:bg-brand-gray-900 p-8 md:p-10 border-l-4 border-brand-orange">
              <p className="text-lg md:text-xl text-brand-blue dark:text-brand-gray-200 font-medium italic leading-relaxed">
                "{description}"
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-20 text-brand-blue">
        <div className="group p-8 md:p-10 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm bg-white dark:bg-brand-blue hover:border-brand-orange transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-4 dark:text-white uppercase tracking-tight">Curated Marketplace</h3>
          <p className="text-sm md:text-base text-brand-gray-600 dark:text-brand-gray-400 leading-relaxed">
            We aggregate only the highest-spec industrial equipment. Our platform provides companies immediate access to the technical power they need, vetted for absolute operational readiness.
          </p>
        </div>
        <div className="group p-8 md:p-10 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm bg-white dark:bg-brand-blue hover:border-brand-orange transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-4 dark:text-white uppercase tracking-tight">Elite Logistics</h3>
          <p className="text-sm md:text-base text-brand-gray-600 dark:text-brand-gray-400 leading-relaxed">
            Hiring equipment is only half the battle. We engineer the entire transport lifecycle, from specialized heavy-lift pickup to precision drop-off at any global site.
          </p>
        </div>
      </div>

      <footer className="pt-12 border-t border-brand-gray-200 dark:border-brand-gray-800">
        <p className="text-xs font-mono text-brand-gray-400 uppercase tracking-widest">
          EST. 2024 / MUSK MOVER GLOBAL LOGISTICS / SYSTEM V1.0
        </p>
      </footer>
    </div>
  );
};

export default Introduction;
