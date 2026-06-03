
import { type ReactNode } from 'react';
import { Header } from '../components/Header';
//Implementacion de IA: se define una interfaz para las props del MainLayout, indicando que el componente puede envolver a otros componentes o páginas a través de la prop 'children'. Esto permite que el MainLayout sea reutilizable y flexible para diferentes partes de la aplicación.
// src/layouts/MainLayout.tsx
interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* El Header vive aquí globalmente para toda la app */}
      <Header /> 
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};