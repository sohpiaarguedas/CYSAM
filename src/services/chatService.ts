const API_URL = 'http://localhost:3000/api/ai';

export const chatService = {
    async sendMessage(userMessage: string): Promise<string> {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.error || `Error del servidor: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error("Error al enviar mensaje a la API de CYSAM:", error);
            throw error;
        }
    }
};