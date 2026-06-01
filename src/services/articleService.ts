import { type ArticleCardType } from '../types/articleCardType';
import articleData from '../data/articles.json';


export const articleService = {
    getAllArticles(): ArticleCardType[] {
        return articleData as ArticleCardType[];
    },
    getArticleById(id: string | number): ArticleCardType | undefined {
        const articles = this.getAllArticles();
        return articles.find(article => article.id === id);
    }

}
