import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/articleCard';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import { type ArticleType } from '../types/articleType';
import { articleService } from '../services/articleService';
import { chatService } from '../services/chatService';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

export const Principal = () => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'bot',
            text: '¡Hola! Soy tu asistente personal de CYSAM ¿En qué puedo ayudarte hoy?'
        }
    ]);
    const [chatLoading, setChatLoading] = useState(false);

    useEffect(() => {
        articleService.getAllArticles()
            .then((data) => {
                setArticles(data);
            });
    }, []);

    const handleSendMessage = async () => {
        const trimmedInput = chatInput.trim();
        if (!trimmedInput || chatLoading) return;

        setChatInput('');
        setMessages((prev) => [...prev, { sender: 'user', text: trimmedInput }]);
        setChatLoading(true);

        try {
            const reply = await chatService.sendMessage(trimmedInput);
            setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
        } catch (error: any) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                {
                    sender: 'bot',
                    text: error.message || 'Lo siento, ocurrió un error al conectar con el chatbot de IA. Por favor verifica que el backend esté encendido.'
                }
            ]);
        } finally {
            setChatLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-white flex flex-col">

            <section className="w-full h-125 -mt-20 pt-20 mb-10 relative overflow-hidden flex items-center justify-end px-6 md:px-24">
                <img
                    src="banner.png"
                    alt="Banner de Bienvenida"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />

                <div className="w-full max-w-full mx-auto relative z-10 flex justify-end">
                    <div className="max-w-md text-right md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] uppercase">
                            ¿Has sido víctima<br />de estafas y robo<br />de información?
                        </h1>
                    </div>
                </div>
            </section>

            <section className="w-full py-10 px-10 flex flex-col items-center bg-white">
                <h2 className="text-3xl font-bold text-cysam-blue tracking-wide text-center uppercase mb-20 border-b-2 border-cysam-blue pb-1">
                    ¡En CYSAM Podemos Ayudarte!
                </h2>

                <YouTubeEmbed
                    embedUrl="https://www.youtube.com/embed/1lNmoAHroxU?si=1Zgg16BYtfvLq0ZB"
                    title="Bienvenida a CYSAM"
                />
            </section>

            <section className="w-full py-10 px-10 flex flex-col items-center bg-white">
                <h3 className="text-3xl font-black text-gray-900 mb-10 tracking-wide">
                    ¿Necesitas ayuda?
                </h3>

                <div className="w-full max-w-9xl bg-[#E5DCD0] rounded-[28px] p-6 md:p-8 mt-10 flex flex-col gap-6 shadow-md transition-all duration-300">
                    <div className="text-left border-b border-gray-300/50 pb-4">
                        <h4 className="text-lg font-bold text-cysam-blue-dark flex items-center gap-2">
                            Asistente Inteligente de CYSAM
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 font-light">
                            Nuestra Inteligencia Artificial está lista para analizar posibles mensajes fraudulentos, correos sospechosos o guiarte en los pasos que debes seguir si comprometieron tus datos.
                        </p>
                    </div>

                    {/* Messages Container */}
                    <div className="w-full max-h-[350px] min-h-[150px] overflow-y-auto flex flex-col gap-4 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm transition-all duration-200 ${msg.sender === 'user'
                                            ? 'bg-cysam-blue text-white rounded-tr-none'
                                            : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                                        }`}
                                >
                                    <p className="whitespace-pre-line font-light">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {chatLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white text-gray-500 rounded-2xl rounded-tl-none px-4 py-3 text-sm border border-gray-200 shadow-sm flex items-center gap-1.5">
                                    <span className="font-light">CYSAM está escribiendo</span>
                                    <span className="flex gap-1 items-center justify-center mt-1">
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Container */}
                    <div className="w-full bg-white rounded-xl h-14 flex items-center px-4 border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-cysam-blue focus-within:border-transparent transition-all duration-200">
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage();
                                }
                            }}
                            disabled={chatLoading}
                            placeholder="Describe la situación sospechosa o escribe tu duda aquí..."
                            className="w-full bg-transparent text-sm font-light text-gray-700 outline-none pr-3 disabled:opacity-50"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={chatLoading || !chatInput.trim()}
                            className="p-2 rounded-lg bg-cysam-blue hover:bg-cysam-blue-dark text-white shadow-md hover:scale-105 active:scale-95 disabled:bg-gray-300 disabled:shadow-none disabled:scale-100 transition-all duration-200 flex items-center justify-center cursor-pointer"
                            title="Enviar consulta"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <main className="w-full p-10 mb-10 bg-white flex flex-col items-center">
                <div className="w-full">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-cysam-blue tracking-wide uppercase">
                            Módulos de aprendizaje
                        </h2>
                        <div className="h-1 w-20 bg-cysam-blue mx-auto mt-2 rounded-full"></div>
                    </div>

                    <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-full justify-items-stretch">

                        {Array.isArray(articles) && articles.map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                            />
                        ))}

                    </div>

                </div>
            </main>

        </div>
    );
};