interface MediaProps {
  mediaUrl: string;
  mediaType: "image" | "video";
}

function ArticleMedia({ mediaUrl, mediaType }: MediaProps) {
  return (
    <div className="w-full">
      <div className=" w-full overflow-hidden rounded-3x1 aspect-video">
        {mediaType === "video" ? (
          <video
            src={mediaUrl}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={mediaUrl}
            alt="image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default ArticleMedia;