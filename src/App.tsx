import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import ArticleDetail from "./pages/articleDetail";
import { Principal } from "./pages/principal";
import { articleService } from "./services/articleService";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import { NewArticle } from "./pages/CreateArticle";

function App() {
  
  const articles = articleService.getAllArticles();

 

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Principal />} />

          <Route path="/login" element={<Login/>}/>

          <Route path="/register" element={<Register/>}/>

          <Route
            path="/articulos/:id"
            element={<ArticleDetail />}
          />
          <Route 
          path="/crear"
          element={<NewArticle/>}/>
          
        </Routes>
      </MainLayout>

    </BrowserRouter>
    
  );
}


export default App;