import { useEffect, useState } from "react";
import { ArticleCard } from "./articleCard";
import { articleService } from "../services/articleService";
import type { ArticleCardType } from "../types/articleCardType";

function ArticleContent() {
  const [articles, setArticles] = useState<ArticleCardType[]>([]);

  useEffect(() => {
    const data = articleService.getAllArticles();
    setArticles(data);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
}

export default ArticleContent;