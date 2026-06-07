import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import ArticleDetail from "./pages/articleDetail";
import { Principal } from "./pages/principal";
import { articleService } from "./services/articleService";
import Login from "./pages/LogIn";
import Register from "./pages/Register";

function App() {
  const articles = articleService.getAllArticles();

  const [selectedArticle, setSelectedArticle] = useState(
    articles[0]
  );

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Principal />} />

          <Route path="/login" element={<Login/>}/>

          <Route path="/register" element={<Register/>}/>

          <Route
            path="/articulos/:id"
            element={
              <ArticleDetail
                article={selectedArticle}
                onSelectArticle={setSelectedArticle}
              />
            }
          />
        </Routes>
      </MainLayout>

    </BrowserRouter>
  );
}

export default App;