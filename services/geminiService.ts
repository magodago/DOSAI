
import { GoogleGenAI } from "@google/genai";

export async function getSlideInsight(prompt: string): Promise<string | null> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Actúa como David Ortiz, consultor de IA de élite para PYMEs. Tu objetivo es convencer al dueño de un negocio de que la IA es su mejor inversión. Genera un insight de 1 sola frase potente, directa y orientada a beneficios económicos: ${prompt}`,
      config: {
        temperature: 0.8,
        maxOutputTokens: 100,
      }
    });

    return response.text || null;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return null;
  }
}
