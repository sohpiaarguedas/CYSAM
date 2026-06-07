import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/articleCard';
import { type ArticleType } from '../types/articleType';
import { articleService } from '../services/articleService';

export const Principal = () => {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        const data = articleService.getAllArticles();
        setArticles(data);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white flex flex-col">

            <section className="w-full h-125 -mt-20 pt-20 relative overflow-hidden flex items-center justify-end px-6 md:px-24">
                <img 
                    src="banner.png" 
                    alt="Banner de Bienvenida" 
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                
                <div className="w-full max-w-8xl mx-auto relative z-10 flex justify-end">
                    <div className="max-w-md text-right md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] uppercase">
                            ¿Has sido víctima<br />de estafas y robo<br />de información?
                        </h1>
                    </div>
                </div>
            </section>

            <main className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center">
                <div className="max-w-7xl w-full">

                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-cysam-blue tracking-wide uppercase">
                            ¿En CYSAM Podemos Ayudarte?
                        </h2>
                        <div className="h-1 w-20 bg-cysam-blue mx-auto mt-2 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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