import React from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Residencial Pinheiros",
    status: "Concluído",
    description: "Situado no coração de São Pedro, o Residencial Pinheiros oferece uma localização privilegiada, próximo à Igreja Matriz, ao Parque Municipal e com fácil acesso a restaurantes e supermercados.",
    location: "São Pedro",
    features: ["Garagem privativa", "Excelente Localização", "Elevador", "Playground", "Portaria automática", "Gás individual", "Área de churrasco", "Revestimento em porcelanato"],
    image:
      "https://w7startup.com.br/nzc-pinheiros.jpeg",
  },
  {
    id: 2,
    title: "Residencial Caminho das Cachoeiras",
    status: "Concluído",
    description: "Próximo ao Parque dos Saltos, o Residencial Caminho das Cachoeiras oferece uma localização privilegiada, com fácil acesso ao centro da cidade e aos principais atrativos turísticos de Brotas, unindo conveniência e contato com a natureza.",
    location: "Brotas",
    features: ["Garagem coberta", "Excelente Localização", "Gás individual", "Portaria automática"],
    image:
      "https://w7startup.com.br/nzc-cachoeiras.png",
  },
  {
    id: 3,
    title: "Residencial Areias",
    status: "Concluído",
    description: "Com localização privilegiada no centro de Descalvado, o Residencial Areias está cercado por comodidades essenciais, como comércios, escolas, restaurantes e supermercados, garantindo praticidade e conveniência para o seu dia a dia.",
    location: "Descalvado",
    features: ["Garagem coberta", "Excelente Localização", "Playground", "Portaria automática", "Gás individual", "Área de churrasco", "Revestimento em porcelanato"],
    image:
      "https://w7startup.com.br/nzc-areias.png",
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