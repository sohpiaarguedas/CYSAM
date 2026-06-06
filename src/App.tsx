import { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import ArticleDetail from "./pages/articleDetail";
import { Principal } from "./pages/principal";
import { articleService } from "./services/articleService";

function App() {
  const articles = articleService.getAllArticles();

  const [selectedArticle, setSelectedArticle] = useState(
    articles[0]
  );

  return (
    <MainLayout>
          <ArticleDetail
      article={selectedArticle}
      onSelectArticle={setSelectedArticle}
    />
    </MainLayout>

  );
}

export default App;