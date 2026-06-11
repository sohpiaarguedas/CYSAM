import ArticleMedia from "../components/ArticleMedia";
import { ArticleCard } from "../components/articleCard";
import { articleService } from "../services/articleService";
import type { ArticleType } from "../types/articleType";

//para poder cambiar de articulo y su url
import { useNavigate, useParams } from "react-router-dom";


function ArticleDetail() {
  // useParams es un hook devuelve un objeto con los parámetros de la URL. 
  // Luego usa el parámetro id junto con find() para buscar y obtener 
  // el artículo que se debe mostrar
const params = useParams();
const id = params.id;
const navigate = useNavigate();


const articles = articleService.getAllArticles();


const article = articles.find(
  article => article.id === Number(id)
);

if (!article) {
  return <h1>Artículo no encontrado</h1>;
}

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-medium">
          {article.title}
        </h1>
      </div>

      <div className="mb-10">
        <ArticleMedia
          mediaUrl={article.mediaUrl}
          mediaType={article.mediaType}
        />
      </div>

      <div className="bg-yellow-100 p-8 text-center mb-12">
        <h2 className="text-xl font-medium mb-4">
          {article.title}
        </h2>

        <p className="max-w-4xl mx-auto mb-4">
          {article.summary}
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((info) => (
           <div
            key={info.id}
            className="cursor-pointer"
            //navigate cambia el url
            onClick={() => navigate(`/articulos/${info.id}`)}
          >
            <ArticleCard article={info} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleDetail;