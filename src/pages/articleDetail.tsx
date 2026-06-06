import ArticleMedia from "../components/ArticleMedia";
import ArticleList from "../components/ArticlesList";
import { Header } from "../components/Header";
import type { ArticleCardType } from "../types/articleCardType";

interface ArticleDetailProps {
  article: ArticleCardType;
  onSelectArticle: (article: ArticleCardType) => void;
}

function ArticleDetail({article, onSelectArticle }: ArticleDetailProps) {


  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Header />

      <div className="text-center mb-8">
        <h1 className="text-2xl  font-medium">
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

        <p className="max-w-4xl mx-auto">
          {article.summary}
        </p>
      </div>

      <ArticleList onSelectArticle={onSelectArticle} />
    </div>
  );
}

export default ArticleDetail;