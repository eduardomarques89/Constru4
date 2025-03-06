import React from 'react';
import { Building2, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-gray-200 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white">Constru4</span>
            </div>
            <p className="text-gray-200">
              Transformando sonhos em realidade através da construção civil.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition">Sobre Nós</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projetos</a></li>
              <li><a href="#news" className="hover:text-white transition">Notícias</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-sm">
            © 2025 Constru4. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};