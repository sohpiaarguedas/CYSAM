export interface ArticleCardType {
    id: string | number;
    title: string;
    summary: string;
    mediaUrl: string;
    mediaType: 'video' | 'image';
    linkUrl: string;
    posterUrl?: string; // Nueva propiedad opcional para la URL del poster de video Implementada por IA
    buttonText?: string;
}