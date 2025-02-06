import React from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Residencial Vista Verde",
    status: "Em Construção",
    description: "Apartamentos de 2 e 3 dormitórios com lazer completo",
    location: "São Paulo - SP",
    price: "A partir de R$ 250.000",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Comercial Business Tower",
    status: "Concluído",
    description: "Salas comerciais e lajes corporativas no centro",
    location: "São Paulo - SP",
    price: "A partir de R$ 450.000",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Condomínio Parque das Flores",
    status: "Lançamento",
    description: "Casas em condomínio fechado com área verde",
    location: "Campinas - SP",
    price: "A partir de R$ 350.000",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Empreendimentos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça nossos projetos em andamento e futuros lançamentos
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />

                {project.status === "Em Construção" && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                )}

                {project.status === "Concluído" && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-checked text-white px-4 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                )}
                {project.status === "Lançamento" && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">
                    {project.price}
                  </span>
                  <Link 
                    to={`/projeto/${project.id}`}
                    className="text-primary flex items-center cursor-pointer"
                  >
                    Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};