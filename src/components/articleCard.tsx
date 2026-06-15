import { useState, useRef } from 'react';
import type { ArticleType } from '../types/articleType';
import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  article: ArticleType;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { title, summary, mediaUrl, mediaType, linkUrl, linkPreview, linkImagePreview, posterUrl, buttonText = 'VER' } = article;

  const esAudiovisual = mediaType === 'video' || mediaType === 'youtube';

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (esAudiovisual && videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (esAudiovisual && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const getOverlayClass = () => {
    if (isHovered) {
      if (esAudiovisual) {
        return 'bg-cysam-blue/35 opacity-100';
      } else {
        return 'bg-cysam-blue/92 opacity-100';
      }
    } else {
      return 'bg-transparent opacity-0';
    }
  };


  const navigate = useNavigate();

  return (
    <div
      /* ◄ Modificado: w-full y max-w-full obligan a la tarjeta a abarcar el 100% de la columna del Grid de la página */
      className="flex flex-col w-full max-w-full bg-white rounded-[28px] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-16/10 bg-gray-100 overflow-hidden">

        {esAudiovisual && (
          <video
            ref={videoRef}
            src={linkPreview}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            muted
            loop
            playsInline
          />
        )}

        <img
          src={esAudiovisual && linkImagePreview ? linkImagePreview : mediaUrl}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${esAudiovisual && isHovered ? 'opacity-0 invisible z-0' : 'opacity-100 z-5'}`}
        />

        <div className={`absolute inset-0 flex items-center justify-center p-5 transition-all duration-500 ease-in-out z-20 ${getOverlayClass()}`}>
          <div className="text-center text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
            <h4 className="text-lg font-bold mb-2 leading-snug tracking-wide uppercase">{title}</h4>
            <p className="text-sm font-light leading-relaxed">{summary}</p>
          </div>
        </div>
      </div>

      <button
      //navigate cambia el url
        onClick={() => navigate(`/articulos/${article.id}`)}
        className="block w-full bg-cysam-blue hover:bg-cysam-blue-dark text-white text-center py-3.5 text-base font-semibold tracking-wider transition-colors duration-200"
      >
        {buttonText}
      </button>

    </div>
  );
};