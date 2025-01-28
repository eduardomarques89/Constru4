import React from 'react';

export const LeadCapture = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Receba Novidades e Ofertas Exclusivas
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Cadastre-se para receber em primeira mão informações sobre nossos lançamentos
          </p>
          <form className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};