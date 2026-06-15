import { type ArticleType } from '../types/articleType';

const API_URL = 'http://localhost:3000/api/articles';

export const articleService = {
    async getAllArticles(): Promise<ArticleType[]> {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Error en la respuesta del servidor');
            
            const data = await response.json();

            if (Array.isArray(data)) return data as ArticleType[];
            
            const arrayEncontrado = Object.values(data).find(Array.isArray);
            return (arrayEncontrado as ArticleType[]) || [];
            
        } catch (error) {
            console.error("Error al conectar con la API de CYSAM:", error);
            return [];
        }
    },

    async getArticleById(id: string | number): Promise<ArticleType | undefined> {
        try {
            const articles = await this.getAllArticles();
            return articles.find(article => String(article.id) === String(id));
        } catch (error) {
            console.error(`Error al buscar artículo por ID ${id}:`, error);
            return undefined;
        }
    }
};