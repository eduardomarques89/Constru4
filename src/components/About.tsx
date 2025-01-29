import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-600-500 mb-6 leading-tight">
              Construindo o futuro com qualidade e inovação
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              A Constru4 é uma construtora que se destaca no mercado pela excelência em seus projetos 
              e compromisso com a satisfação dos clientes. Nossa missão é transformar sonhos em realidade 
              através de empreendimentos inovadores e sustentáveis.
            </p>
            <div className="flex items-center space-x-4">
              <CheckCircle2 className="h-6 w-6 text-checked" />
              <span className="text-gray-600">Projetos sustentáveis</span>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <CheckCircle2 className="h-6 w-6 text-checked" />
              <span className="text-gray-600">Tecnologia de ponta</span>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <CheckCircle2 className="h-6 w-6 text-checked" />
              <span className="text-gray-600">Equipe especializada</span>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              alt="Equipe Constru4"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};