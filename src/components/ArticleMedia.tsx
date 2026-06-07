import { YouTubeEmbed } from "../components/YouTubeEmbed"; // 

interface MediaProps {
  mediaUrl: string;
  mediaType: "image" | "video" | "youtube";
}

function ArticleMedia({ mediaUrl, mediaType }: MediaProps) {
  return (
    <div className="w-full">

      <div className="w-full overflow-hidden rounded-3xl aspect-video">


        {mediaType === "youtube" ? (


          <YouTubeEmbed embedUrl={mediaUrl} title="Contenido de YouTube" />

        ) : mediaType === "video" ? (


          <video
            src={mediaUrl}
            controls
            className="w-full h-full object-cover"
          />

        ) : (

          <img
            src={mediaUrl}
            alt="Media contenido"
            className="w-full h-full object-cover"
          />
        )}

      </div>
    </div>
  );
}

export default ArticleMedia;