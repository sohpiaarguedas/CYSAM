import { useEffect, useState } from "react";
import { ArticleCard } from "./articleCard";
import { articleService } from "../services/articleService";
import type { ArticleCardType } from "../types/articleCardType";

interface ListProps {
  onSelectArticle: (article: ArticleCardType) => void;
}

function ArticleList({ onSelectArticle }: ListProps) {
  const [articles, setArticles] = useState<ArticleCardType[]>([]);

  useEffect(() => {
    setArticles(articleService.getAllArticles());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onClick={() => onSelectArticle(article)}
        />
      ))}
    </div>
  );
}

export default ArticleList;