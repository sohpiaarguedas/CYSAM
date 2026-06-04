import ArticlesEspecific from "../components/Video";
import ArticleContent from "../components/articleContainer";

interface ArticleDetailProps {
  title: string;
  description: string;
  video: string;
}

function ArticleDetail({ title, description, video }: ArticleDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">


      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-medium ">
          {title}
        </h1>
      </div>


      <div className="mb-10">
        <ArticlesEspecific video={video} />
      </div>


      <div className="bg-yellow-100 p-8 text-center mb-12">
        <h2 className="text-xl font-medium mb-4">
          {title}
        </h2>

        <p className="  max-w-4xl mx-auto">
          {description}
        </p>
      </div>


      <ArticleContent />

    </div>
  );
}

export default ArticleDetail;