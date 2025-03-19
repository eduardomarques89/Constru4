import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Home,
  ArrowLeft,
  Building2,
  Users,
} from "lucide-react";
import { Footer } from "./Footer";

const projects = [
  {
    id: 1,
    title: "Residencial Pinheiros",
    status: "Concluído",
    description: "Situado no coração de São Pedro, o Residencial Pinheiros oferece uma localização privilegiada, próximo à Igreja Matriz, ao Parque Municipal e com fácil acesso a restaurantes e supermercados.",
    location: "São Pedro",
    area: "49m² a 53m² (A depender suíte)",
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
    area: "49m²",
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
    area: "49m² a 53m² (A depender suíte)",
    features: ["Garagem coberta", "Excelente Localização", "Playground", "Portaria automática", "Gás individual", "Área de churrasco", "Revestimento em porcelanato"],
    image:
      "https://w7startup.com.br/nzc-areias.png",
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Projeto não encontrado
          </h2>
          <a
            href="/"
            className="text-primary hover:text-blue-800 mt-4 inline-block"
          >
            Voltar para a página inicial
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <nav className="relative z-10 bg-primary">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-around">
            <div className="flex space-x-2">
            <div>
              <img src="https://w7startup.com.br/logo-constru4.png" alt="" className='w-32' />
            </div>
            </div>
            <div className="hidden md:flex space-x-6 font-normal">
              <a href="/#about" className="text-white">
                Sobre
              </a>
              <a href="/#projects" className="text-white">
                Projetos
              </a>
            </div>
            <button className="hidden md:block bg-white text-sm md:text-base text-black px-4 py-2 rounded-md hover:bg-secondary hover:text-white transition font-medium">
              Fale Conosco
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 md:px-12 lg:px-56 py-12">
        <a
          href="/#projects"
          className="inline-flex items-center text-primary hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para a página inicial
        </a>

        <div className="bg-white rounded-md  overflow-hidden">
          <div className="relative h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span
                className={`
                px-4 py-1 rounded-full text-sm font-medium text-white
                ${project.status === "Em Construção" ? "bg-blue-600" : ""}
                ${project.status === "Concluído" ? "bg-checked" : ""}
                ${project.status === "Lançamento" ? "bg-secondary" : ""}
              `}
              >
                {project.status}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <button className="w-[200px] md:w-2/4 lg:h-1/2 lg:w-[200px] flex space-x-1 items-center justify-center py-2 rounded-md bg-[#1faf54] hover:bg-[#137c3a] transition text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-[20px] h-[20px]"
                />
                <a
                  href="https://wa.me/5519999665452"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com atendente
                </a>
              </button>
            </div>

            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{project.location}</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Área</p>
                  <p className="font-medium">{project.area}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sobre o empreendimento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Diferenciais
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Home className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>    
  );
};

export default ProjectDetails;
