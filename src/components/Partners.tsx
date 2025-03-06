import React from 'react';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "João Silva",
    role: "Proprietário",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    text: "Realizar o sonho da casa própria com a NZC foi uma experiência incrível. A qualidade da construção e o atendimento superaram todas as expectativas.",
  },
  {
    name: "Maria Santos",
    role: "Investidora",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    text: "Excelente construtora! Profissionalismo e comprometimento em todas as etapas do processo.",
  },
  {
    name: "Pedro Costa",
    role: "Proprietário",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    text: "A NZC transformou meu sonho em realidade. Apartamento entregue no prazo e com acabamento impecável.",
  },
];

export const Partners = () => {
  return (
    <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            O que dizem nossos clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:scale-110 ease-in-out duration-150"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};