import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Navigation } from './Navigation';

export const Hero = () => {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern building construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      
      <Navigation />

      <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-white leading-tight md:text-6xl">
            Na <span className='text-secondary'>Constru4</span> nós construímos o futuro
          </h1>
          <p className="text-xl text-gray-200 mt-2 leading-relaxed">
            Com qualidade e inovação.
          </p>
          <div className="flex flex-col space-y-6 space-x-0 md:flex-row md:space-x-4 mt-12 md:space-y-0">
            <button className="bg-blue-600 text-white px-4 py-4 w-48 md:w-auto rounded-md text-md hover:bg-blue-700 transition flex items-center justify-center font-medium">
              Nossos Projetos
            </button>
            <button className="bg-secondary text-white px-8 py-4 w-64 md:w-auto rounded-md text-md transition flex items-center justify-center font-medium">
              Sobre nós <ArrowDown className="ml-4 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};