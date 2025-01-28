import React from 'react';
import { Building2 } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="relative z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <Building2 className="h-8 w-8 text-blue-600" /> */}
            <span className="text-2xl font-bold text-white">Logo</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white hover:text-secondary font-medium">Sobre</a>
            <a href="#projects" className="text-white hover:text-secondary font-medium">Projetos</a>
            <a href="#partners" className="text-white hover:text-secondary font-medium">Parceiros</a>
            <a href="#contact" className="text-white hover:text-secondary font-medium">Contato</a>
          </div>
          <button className="hidden md:block bg-white text-sm md:text-base text-black px-4 py-1 rounded-md hover:bg-secondary transition font-medium">
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
};