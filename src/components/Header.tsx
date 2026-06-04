import { useState } from 'react';

export const Header = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const presionarBuscar = () => {
    if (textoBusqueda.trim() === '') {
      // Si borran todo el texto, limpiamos el parámetro de la URL
      window.history.pushState({}, '', window.location.pathname);
    } else {
      // Guardamos la búsqueda en la URL: ?search=lo-que-escribió
      window.history.pushState({}, '', `?search=${encodeURIComponent(textoBusqueda)}`);
    }

    // Truco: Despachamos un evento nativo para que la página 'Principal' se entere del cambio al instante
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <header className="relative w-full h-20 bg-transparent flex items-center justify-between px-6 md:px-12 z-50">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-black text-cysam-blue tracking-wider">CYSAM</a>
      </div>

      <div className="w-full max-w-md mx-4 bg-white border border-gray-200 rounded-full flex items-center px-4 py-1.5 shadow-2xs">
        <input
          type="text"
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          placeholder="¿En qué podemos ayudarte?..."
          className="w-full bg-transparent text-sm font-light text-gray-700 outline-none"
        />
        <button 
          onClick={presionarBuscar}
          className="text-xs font-bold text-cysam-blue hover:text-cysam-blue-dark px-2 cursor-pointer"
        >
          BUSCAR
        </button>
      </div>

      <div className="flex items-center">
        <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
          <img src="/edgar.png" alt="Usuario" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};