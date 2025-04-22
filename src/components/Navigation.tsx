export const Navigation = () => {
  return (
    <nav className="relative z-10">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-around">
          <div className="flex space-x-2">
            <div>
              <img src="https://w7startup.com.br/logo-constru4.png" alt="" className='w-32' />
            </div>
          </div>
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#about" className="text-white text-lg hover:text-secondary drop-shadow-2xl">Sobre</a>
            <a href="#projects" className="text-white text-lg hover:text-secondary drop-shadow-2xl">Projetos</a>
            {/* <a href="#partners" className="text-white hover:text-secondary">Parceiros</a> */}
          </div>
          <button className="hidden md:block bg-white text-sm md:text-base text-black px-4 py-2 rounded-md hover:bg-secondary hover:text-white transition font-medium">
            <a href="https://wa.me/5519999665452" target='_blank'>Entre em Contato</a>
          </button>
        </div>
      </div>
    </nav>
  );
};