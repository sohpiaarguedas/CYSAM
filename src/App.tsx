import { useState } from "react";
import ArticleDetail from "./pages/articleDetail";
import { articleService } from "./services/articleService";

function App() {
  const articles = articleService.getAllArticles();

  const [selectedArticle, setSelectedArticle] = useState(
    articles[0]
  );

  return (
    <ArticleDetail
      article={selectedArticle}
      onSelectArticle={setSelectedArticle}
    />
  );
}

export default App;