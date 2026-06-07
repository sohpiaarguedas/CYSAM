interface YouTubeEmbedProps {
  embedUrl: string;
  title?: string;
}

export const YouTubeEmbed = ({ embedUrl, title = 'CYSAM Video Player' }: YouTubeEmbedProps) => {
  return (
    <div className="w-full aspect-video bg-black rounded-[28px] shadow-xs overflow-hidden">
      <iframe
        className="w-full h-full border-none"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};