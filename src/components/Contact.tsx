import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-14 lg:px-2 xl:px-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Estamos prontos para atender você e realizar seu sonho da casa
              própria.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Telefone</h3>
                  <span className="text-gray-600">(19) 99966-5452</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">E-mail</h3>
                  <span className="text-gray-600">contato@constru4.com.br</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Endereço</h3>
                  <span className="text-gray-600">
                    Avenida Jose da Silva Braga - Brotas, SP
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for Google Maps */}
            <div className="h-96 bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1401622439107!2d-48.1146058!3d-22.310538299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c779cfae09fbeb%3A0xbb32d01436d029f2!2sAv.%20Jos%C3%A9%20da%20Silva%20Braga%2C%20Brotas%20-%20SP%2C%2017380-000!5e0!3m2!1spt-BR!2sbr!4v1741280256672!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
