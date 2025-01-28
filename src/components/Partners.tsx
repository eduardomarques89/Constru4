import React from 'react';

const partners = [
  {
    name: "TechBuild Solutions",
    description: "Tecnologia em construção sustentável",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
  },
  {
    name: "EcoMaterials",
    description: "Fornecedor de materiais ecológicos",
    logo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80",
  },
  {
    name: "ArchDesign Pro",
    description: "Projetos arquitetônicos inovadores",
    logo: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?auto=format&fit=crop&q=80",
  },
];

export const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Empresas que confiam em nosso trabalho e fazem parte da nossa história
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-2 text-secondary">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};