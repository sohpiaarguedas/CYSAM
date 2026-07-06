import { type ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode; // Define que este componente puede envolver a otros componentes o páginas
}

export const MainLayout = ({ children }: MainLayoutProps) => {

  //cambia la ruta
  const navigate = useNavigate();
  const token = localStorage.getItem("token");



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      

      <header className="relative w-full h-20 bg-transparent flex justify-between items-center px-6 md:px-12 z-50 border-b border-white/10">
        
        <div className="flex items-center">
          <a href="/" className="block transition-transform duration-200 hover:scale-102">
            <img 
              src="CysamLogo.png" 
              alt="CYSAM Logo" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

        <div className='flex items-center gap-3'>
          {!token && (
            <div className="bg-cysam-blue text-white p-2 rounded-full cursor-pointer">
              <button onClick={() => navigate("/login")}>
                Iniciar sesión
              </button>
            </div>
          )}

          {token && (
            <div className="bg-cysam-blue text-white p-2 rounded-full cursor-pointer">
              <button onClick={() => navigate("/crear")}>
                Crear artículo
              </button>
            </div>
          )}

        </div>
        
      </header>


      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-cysam-blue text-white py-8 px-6 text-center text-sm font-light mt-auto z-10">
        <p>© 2026 CYSAM - Proyecto de Desarrollo de Aplicaciones Web</p>
      </footer>

    </div>
  );
};