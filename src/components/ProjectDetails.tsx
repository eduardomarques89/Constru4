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
import { Navigation } from "./Navigation";

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
    fullDescription: `O Residencial Vista Verde é um empreendimento moderno que oferece o melhor em conforto e qualidade de vida. Com apartamentos de 2 e 3 dormitórios, o projeto foi pensado para atender famílias que buscam praticidade e bem-estar.`,
    features: [
      "Área de lazer completa",
      "Piscina adulto e infantil",
      "Academia equipada",
      "Salão de festas",
      "Playground",
      "Churrasqueira",
    ],
    details: {
      area: "65-85m²",
      units: "120 unidades",
      floors: "15 andares",
      delivery: "Dezembro 2024",
    },
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
    fullDescription: `O Comercial Business Tower é um empreendimento corporativo de alto padrão localizado no coração financeiro da cidade. Com infraestrutura moderna e localização privilegiada, é a escolha ideal para empresas que buscam prestígio e praticidade.`,
    features: [
      "Lobby com pé direito duplo",
      "Sistema de segurança 24h",
      "Estacionamento rotativo",
      "Heliporto",
      "Auditório",
      "Salas de reunião compartilhadas",
    ],
    details: {
      area: "35-400m²",
      units: "200 unidades",
      floors: "25 andares",
      delivery: "Pronto para ocupação",
    },
  },
  {
    id: 4,
    title: "Condomínio Parque das Flores",
    status: "Lançamento",
    description: "Casas em condomínio fechado com área verde",
    location: "Campinas - SP",
    price: "A partir de R$ 350.000",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
    fullDescription: `O Condomínio Parque das Flores é um projeto residencial que une natureza e modernidade. Com casas espaçosas e ampla área verde, o empreendimento oferece qualidade de vida e segurança para sua família.`,
    features: [
      "Área verde preservada",
      "Segurança 24h",
      "Clube com piscina",
      "Quadra poliesportiva",
      "Pista de caminhada",
      "Playground",
    ],
    details: {
      area: "150-200m²",
      units: "80 casas",
      floors: "2 pavimentos",
      delivery: "Junho 2025",
    },
  },
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
    <div className="bg-gray-200 min-h-screen">
      <nav className="relative z-10 bg-primary">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-around">
            <div className="flex space-x-2">
              <span className="text-2xl font-bold text-white">Logo</span>
            </div>
            <div className="hidden md:flex space-x-6 font-normal">
              <a href="/#about" className="text-white">
                Sobre
              </a>
              <a href="/#projects" className="text-white">
                Projetos
              </a>
              <a href="/#partners" className="text-white">
                Parceiros
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
          Voltar para todos os projetos
        </a>

        <div className="bg-white rounded-md shadow-xl overflow-hidden">
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
              <button className="w-[200px] md:w-2/4 lg:h-1/2 lg:w-[200px] flex space-x-1 items-center justify-center bg-red-100 py-2 rounded-md bg-[#1faf54] hover:bg-[#137c3a] transition text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-[20px] h-[20px]"
                />
                <a
                  href="https://wa.me/5519988811404"
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
                  <p className="font-medium">{project.details.area}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Unidades</p>
                  <p className="font-medium">{project.details.units}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Entrega</p>
                  <p className="font-medium">{project.details.delivery}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sobre o empreendimento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.fullDescription}
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

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col justify-center items-center space-y-8">
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {project.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
