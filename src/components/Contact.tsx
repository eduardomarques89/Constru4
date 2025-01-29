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
                  <span className="text-gray-600">(11) 9999-9999</span>
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
                    Av. Paulista, 1000 - São Paulo, SP
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for Google Maps */}
            <div className="h-96 bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275.28132905833917!2d-46.89414805844381!3d-21.829386676077206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c82be566194a51%3A0xf078698ed1a35d79!2sR.%20Dr.%20Moacir%20Troncoso%20P%C3%A9res%2C%20Vargem%20Grande%20do%20Sul%20-%20SP%2C%2013880-000!5e0!3m2!1spt-BR!2sbr!4v1737998680575!5m2!1spt-BR!2sbr"
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
