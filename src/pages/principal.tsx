// src/pages/Principal.tsx
import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/articleCard';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import { articleService } from '../services/articleService';
import { type ArticleCardType } from '../types/articleCardType';

export const Principal = () => {
    const [articles, setArticles] = useState<ArticleCardType[]>([]);
    const [terminoBusqueda, setTerminoBusqueda] = useState('');



    //IA para detectar el término de búsqueda desde la URL y actualizarlo en tiempo real, buscar una implementacion propia luego cuando se utilice el backend
    useEffect(() => {
        // 1. Cargamos los artículos iniciales
        setArticles(articleService.getAllArticles());

        // 2. Función para leer el parámetro '?search=' de la URL
        const verificarUrl = () => {
            const params = new URLSearchParams(window.location.search);
            const query = params.get('search') || '';
            setTerminoBusqueda(query);
        };

        // Evaluamos la URL al cargar la página por primera vez
        verificarUrl();

        // 3. Escuchamos el evento de cambio en la URL
        window.addEventListener('popstate', verificarUrl);

        // Limpieza del evento al desmontar el componente (buena práctica)
        return () => window.removeEventListener('popstate', verificarUrl);
    }, []);

    // 4. Filtrado clásico idéntico al de antes
    const articulosFiltrados = articles.filter((article) => {
        return article.title.toLowerCase().includes(terminoBusqueda.toLowerCase());
    });

    return (
        <div className="w-full min-h-screen bg-white flex flex-col">

            <section className="w-full h-125 -mt-20 pt-20 relative overflow-hidden flex items-center justify-end px-6 md:px-24">
                <img src="/hero-bg.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="w-full max-w-7xl mx-auto relative z-10 flex justify-end">
                    <div className="max-w-md text-right md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] uppercase">
                            ¿Has sido víctima<br />de estafas y robo<br />de información?
                        </h1>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 px-4 flex flex-col items-center bg-white">
                <h2 className="text-base font-bold text-cysam-blue tracking-wide text-center uppercase mb-8 border-b-2 border-cysam-blue pb-1">
                    ¡En CYSAM Podemos Ayudarte!
                </h2>
                <YouTubeEmbed embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Tutorial CYSAM" />
            </section>


            <section className="w-full py-12 px-4 flex flex-col items-center bg-white">
                <h3 className="text-lg font-black text-gray-900 mb-6 tracking-wide">¿Necesitas ayuda?</h3>
                <div className="w-full max-w-215 bg-[#E5DCD0] rounded-[28px] p-8 flex flex-col gap-6 shadow-2xs">
                    <h4 className="text-base font-bold text-gray-900 mb-3">¡Hola! Soy tu asistente personal...</h4>
                    <div className="w-full bg-white rounded-xl h-12 flex items-center px-4 border border-gray-300">
                        <input type="text" placeholder="Escribe algo..." className="w-full bg-transparent text-sm outline-none" disabled />
                    </div>
                </div>
            </section>


            <section className="w-full py-12 px-4 flex flex-col items-center bg-white max-w-7xl mx-auto">
                <h2 className="text-base font-bold text-cysam-blue tracking-wide text-center uppercase mb-10 border-b-2 border-cysam-blue pb-1">
                    ¡En CYSAM Podemos Ayudarte!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
                    {articulosFiltrados.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
                {articulosFiltrados.length === 0 && (
                    <p className="text-sm text-gray-400 font-light mt-4">No se encontraron módulos con ese nombre.</p>
                )}
            </section>
        </div>
    );
};