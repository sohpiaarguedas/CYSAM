import { type ArticleType } from '../types/articleType';

const API_URL = 'http://localhost:3000/api/articles';

export const articleService = {
    async getAllArticles(): Promise<ArticleType[]> {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch articles');

            const data: any[] = await response.json();
            console.log(data);

            //Se le pide a la IA ayuda para no cambiar toda la estructura de la db ya existente por lo que recomienda
            //lo siguiente:
            //Esta sección actúa como una capa de transformación que normaliza los datos asíncronos que vienen de Neon.
            //  Transforma las propiedades en snake_case nativas de PostgreSQL a variables en camelCase compatibles con 
            // nuestros componentes de React, asegurando la compatibilidad de tipados mediante TypeScript y asignando
            //  valores de respaldo en caso de datos nulos.

            return data.map((art) => ({
                id: art.id,
                title: art.title,
                summary: art.summary,
                mediaUrl: art.media_url || art.mediaUrl,
                mediaType: art.media_type || art.mediaType,
                linkUrl: art.link_url || art.linkUrl,
                linkPreview: art.link_preview || art.linkPreview,
                linkImagePreview: art.link_Image_Preview || art.linkImagePreview,
                posterUrl: art.link_Image_Preview || art.posterUrl,
                buttonText: art.button_text || art.buttonText || 'VER',
                content: art.content || ''
            })) as ArticleType[];

        } catch (error) {
            console.error("Error al conectar con la API de CYSAM:", error);
            return [];
        }
    },

    async getArticleById(id: string | number): Promise<ArticleType | undefined> {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) throw new Error(`Failed to fetch article with id${id}`);

            const data = await response.json();

            return {
                id: data.id,
                title: data.title,
                summary: data.summary,
                mediaUrl: data.media_url || data.mediaUrl,
                mediaType: data.media_type || data.mediaType,
                linkUrl: data.link_url || data.linkUrl,
                linkPreview: data.link_preview || data.linkPreview,
                linkImagePreview: data.link_Image_Preview || data.linkImagePreview,
                posterUrl: data.link_Image_Preview || data.posterUrl,
                buttonText: data.button_text || data.buttonText || 'VER',
                content: data.content || ''
            } as ArticleType;
        } catch (error) {
            console.error(`Faiiled to fetch article with id${id}:`, error);
            return undefined;
        }
    },
    async deleteArticle(id: string | number): Promise<boolean> {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.message || 'Failed to delete article');
            }

            return true;
        } catch (error) {
            console.error("Error al eliminar el artículo:", error);
            throw error;
        }
    },




    async createArticle(article: {
        title: string;
        summary: string;
        media_url: string;
        media_type: string;
        link_preview: string;
        link_Image_Preview: string;
    }) {
        try {

            const token = localStorage.getItem("token");

            const response = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(article)
            });

            if (!response.ok) throw new Error('Failed to create article');

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al crear el artículo:", error);
            throw error;
        }
    }
};
