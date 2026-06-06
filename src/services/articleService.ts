import { type ArticleType } from '../types/articleType';
import articleData from '../data/articles.json';


export const articleService = {
    getAllArticles(): ArticleType[] {
        return articleData as ArticleType[];
    },
    getArticleById(id: string | number): ArticleType | undefined {
        const articles = this.getAllArticles();
        return articles.find(article => article.id === id);
    }

}
