import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const news = [
  {
    title: "Constru4 recebe prêmio de sustentabilidade",
    date: "15/03/2024",
    description: "Reconhecimento por práticas sustentáveis na construção civil",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80",
  },
  {
    title: "Novo projeto residencial em São Paulo",
    date: "10/03/2024",
    description: "Lançamento do empreendimento Vista Verde",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
  },
  {
    title: "Workshop de arquitetura sustentável",
    date: "05/03/2024",
    description: "Evento gratuito para profissionais da área",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  },
];

export const News = () => {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notícias e Eventos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fique por dentro das últimas novidades da Constru4
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-blue-600 flex items-center hover:text-blue-800 font-medium">
                  Leia mais <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};