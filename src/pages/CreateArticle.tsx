import { useState } from "react";
import { articleService } from "../services/articleService";

export function NewArticle() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [mediaType, setMediaType] = useState('Image');
    const [mediaUrl, setMediaUrl] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [linkPreview, setLinkPreview] = useState('');
    const [linkImagePreview, setLinkImagePreview] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        //comprobar que no se suba vacio
        if (!title || !summary || !mediaType || !mediaUrl || !buttonText || !linkPreview || !linkImagePreview) {
            //alert para ver mensaje en pantalla
            alert('Por favor completar todos los campos');
            return;
        }




        setLoading(true);

        try {
            await articleService.createArticle({
                title,
                summary,
                media_type: mediaType,
                media_url: mediaUrl,
                button_text: buttonText,
                link_preview: linkPreview,
                link_Image_Preview: linkImagePreview
            });

            //Para avisar que si se logro se usa un alert para ver en pantalla 
            alert('Artículo publicado correctamente');

            setTitle('');
            setSummary('');
            setMediaType('');
            setMediaUrl('');
            setButtonText('');
            setLinkPreview('');
            setLinkImagePreview('');
        } catch (error) {
            alert('Ocurrió un error al publicar el artículo');
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="w-full px-8 py-6">
            <div className="mb-8">
                <h1 className="text-5xl font-bold text-cysam-blue mb-2">
                    Subir nuevo artículo
                </h1>

                <p className="text-gray-500 text-lg">
                    Configura y publica contenido en CYSAM
                </p>
            </div>

            <div className="max-w-4xl bg-white rounded-[28px] border border-gray-100 ">
                <div className="p-8">

                    <h2 className="text-3xl font-bold text-cysam-blue mb-6">
                        Artículo
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <label className="mb-2 text-sm font-semibold text-gray-700">
                                Título del Artículo
                            </label>

                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-cysam-blue"
                            />
                        </div>

                        <div>
                            <label className=" mb-2 text-sm font-semibold text-gray-700">
                                Resumen
                            </label>

                            <textarea
                                rows={4}
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:border-cysam-blue"
                            />
                        </div>
                    </div>


                    <div className="py-6">
                        <h2 className="text-2xl font-bold text-cysam-blue mb-6">
                            Configuraciones
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className=" mb-2 text-sm font-semibold text-gray-700">
                                    Tipo de Media
                                </label>

                                <select
                                    value={mediaType}
                                    onChange={(e) => setMediaType(e.target.value)}
                                    className="w-full h-12 px-4 border border-gray-300 rounded-xl"
                                >
                                    <option value="image">Imagen</option>
                                    <option value="video">Video</option>
                                    <option value="youtube">YouTube</option>
                                </select>
                            </div>

                            <div>
                                <label className=" mb-2 text-sm font-semibold text-gray-700">
                                    URL de Media / ID de Video
                                </label>

                                <input
                                    type="text"
                                    value={mediaUrl}
                                    onChange={(e) => setMediaUrl(e.target.value)}
                                    className="w-full h-12 px-4 border border-gray-300 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-cysam-blue mb-6">
                            Enlace Externo e Interacción
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-700">
                                    Texto del Botón
                                </label>

                                <input
                                    type="text"
                                    value={buttonText}
                                    onChange={(e) => setButtonText(e.target.value)}
                                    className="w-full h-12 px-4 border border-gray-300 rounded-xl"
                                />
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-700">
                                    Título de Previsualización
                                </label>

                                <input
                                    type="text"
                                    value={linkPreview}
                                    onChange={(e) => setLinkPreview(e.target.value)}
                                    className="w-full h-12 px-4 border border-gray-300 rounded-xl"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-700">
                                    Miniatura del Enlace (URL)
                                </label>

                                <input
                                    type="text"
                                    value={linkImagePreview}
                                    onChange={(e) => setLinkImagePreview(e.target.value)}
                                    className="w-full h-12 px-4 border border-gray-300 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-end gap-4 mt-10">
                        <button className="px-6 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-50 ">
                            Cancelar
                        </button>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="px-8 py-3 rounded-xl bg-cysam-blue hover:bg-cysam-blue-dark text-white font-semibold disabled:opacity-50"
                        >
                            {loading ? 'Publicando...' : 'Publicar Artículo'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};