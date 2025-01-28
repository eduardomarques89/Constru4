import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Estamos prontos para atender você e realizar seu sonho da casa própria.
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
                  <span className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</span>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
                  <Facebook className="h-6 w-6 text-blue-600" />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
                  <Instagram className="h-6 w-6 text-blue-600" />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Telefone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Interesse</label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Selecione o tipo de imóvel</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="comercial">Comercial</option>
                <option value="terreno">Terreno</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};