import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/articleCard';
import { YouTubeEmbed } from '../components/YouTubeEmbed'; 
import { type ArticleType } from '../types/articleType';
import { articleService } from '../services/articleService';

export const Principal = () => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    
    const [chatInput, setChatInput] = useState('');

    useEffect(() => {
        const data = articleService.getAllArticles();
        setArticles(data);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white flex flex-col">

            <section className="w-full h-125 -mt-20 pt-20 mb-10 relative overflow-hidden flex items-center justify-end px-6 md:px-24">
                <img 
                    src="banner.png" 
                    alt="Banner de Bienvenida" 
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                
                <div className="w-full max-w-full mx-auto relative z-10 flex justify-end">
                    <div className="max-w-md text-right md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] uppercase">
                            ¿Has sido víctima<br />de estafas y robo<br />de información?
                        </h1>
                    </div>
                </div>
            </section>

            <section className="w-full py-10 px-10 flex flex-col items-center bg-white">
                <h2 className="text-3xl font-bold text-cysam-blue tracking-wide text-center uppercase mb-20 border-b-2 border-cysam-blue pb-1">
                    ¡En CYSAM Podemos Ayudarte!
                </h2>
                
                <YouTubeEmbed 
                    embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Tutorial de navegación CYSAM" 
                />
            </section>

            <section className="w-full py-10 px-10 flex flex-col items-center bg-white">
                <h3 className="text-3xl font-black text-gray-900 mb-10 tracking-wide">
                    ¿Necesitas ayuda?
                </h3>
                
                <div className="w-full max-w-full bg-[#E5DCD0] rounded-[28px] p-10 mt-10 flex flex-col gap-6 shadow-xs">
                    <div className="text-left">
                        <h4 className="text-base font-bold text-gray-900 mb-3">
                            ¡Hola! Soy tu asistente personal ¿En qué puedo ayudarte hoy?
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed font-light">
                            Nuestra Inteligencia Artificial está lista para analizar posibles mensajes fraudulentos, correos sospechosos o guiarte en los pasos que debes seguir si comprometieron tus datos.
                        </p>
                    </div>
                    
                    <div className="w-full bg-white rounded-xl h-12 flex items-center px-4 border border-gray-300 shadow-xs">
                        <input 
                            type="text" 
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Describe la situación sospechosa o escribe tu duda aquí..." 
                            className="w-full bg-transparent text-sm font-light text-gray-700 outline-none"
                        />
                    </div>
                </div>
            </section>

            <main className="w-full p-10 mb-10 bg-white flex flex-col items-center">
                <div className="w-full">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-cysam-blue tracking-wide uppercase">
                            Módulos de aprendizaje
                        </h2>
                        <div className="h-1 w-20 bg-cysam-blue mx-auto mt-2 rounded-full"></div>
                    </div>

                    <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-full justify-items-stretch">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                            />
                        ))}
                    </div>

                </div>
            </main>

        </div>
    );
};