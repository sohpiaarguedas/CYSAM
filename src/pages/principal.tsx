import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/articleCard';
import {type ArticleCardType } from '../types/articleCardType';
import { articleService } from '../services/articleService';

export const Principal = () => {
    const [articles, setArticles] = useState<ArticleCardType[]>([]);
    useEffect(() => {
        const data = articleService.getAllArticles();
        setArticles(data);
    }), [];

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-cysam-blue tracking-wide uppercase">
                        ¿En CYSAM Podemos Ayudarte?
                    </h2>
                    <div className="h-1 w-20 bg-cysam-blue mx-auto mt-2 rounded-full"></div>
                </div>

                {/* Implementacion de IA para Tailwind y diseño responsivo */}
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
    );
}