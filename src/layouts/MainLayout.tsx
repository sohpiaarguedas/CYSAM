import { type ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode; // Define que este componente puede envolver a otros componentes o páginas
}

export const MainLayout = ({ children }: MainLayoutProps) => {
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


        <div className="text-sm font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-xs">
          Panel de Control
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