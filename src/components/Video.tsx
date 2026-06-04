interface VideoProps {
  video: string;
}

function ArticlesEspecific({ video }: VideoProps) {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-[32px] bg-black aspect-video shadow-lg">
        <video
          src={video}
          
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ArticlesEspecific;