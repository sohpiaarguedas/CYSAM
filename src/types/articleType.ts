export interface ArticleType {
    id: string | number;
    title: string;
    summary: string;
    mediaUrl: string;
    mediaType: 'video' | 'image' | 'youtube';
    linkUrl: string;
    linkPreview?: string;
    linkImagePreview?: string;
    posterUrl?: string; // Nueva propiedad opcional para la URL del poster de video Implementada por IA
    buttonText?: string;
    content: string; // Nueva propiedad para el contenido completo del artículo
}