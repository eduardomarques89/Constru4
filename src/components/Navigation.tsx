import React from 'react';
import { Building2 } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="relative z-10">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-around">
          <div className="flex space-x-2">
            <span className="text-2xl font-bold text-white">Constru4</span>
          </div>
          <div className="hidden md:flex space-x-6 font-normal">
            <a href="#about" className="text-white hover:text-secondary">Sobre</a>
            <a href="#projects" className="text-white hover:text-secondary">Projetos</a>
            <a href="#partners" className="text-white hover:text-secondary">Parceiros</a>
          </div>
          <button className="hidden md:block bg-white text-sm md:text-base text-black px-4 py-2 rounded-md hover:bg-secondary hover:text-white transition font-medium">
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
};