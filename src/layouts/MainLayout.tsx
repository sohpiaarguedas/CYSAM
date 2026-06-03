// src/layouts/MainLayout.tsx
import { type ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode; // Define que este componente puede envolver a otros componentes o páginas
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* ─── HEADER ─── */}
      <header className="bg-white shadow-xs py-4 px-6 flex justify-between items-center border-b border-gray-100">
        <div className="text-2xl font-bold text-cysam-blue tracking-wider">CYSAM</div>
        <div className="text-sm text-gray-500">Panel de Control</div>
      </header>

      {/* ─── CONTENIDO DINÁMICO CON REACTNODE ─── */}
      <main className="flex-1">
        {children}
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-cysam-blue text-white py-8 px-6 text-center text-sm font-light mt-auto">
        <p>© 2026 CYSAM - Proyecto de Desarrollo de Aplicaciones Interactivas.</p>
      </footer>

    </div>
  );
};