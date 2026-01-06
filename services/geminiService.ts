
import { GoogleGenAI } from "@google/genai";

export const generateBrandDescription = async (context: string) => {
  try {
    // Initializing inside the function ensures process.env is only accessed when the function is actually called.
    // This prevents the whole application from crashing on load if 'process' is undefined in the global scope.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Based on the brand Musk Mover (primary: #06233D, secondary: #F84713), generate a professional brand philosophy. 
      Business Model: ${context}. 
      Style: Authoritative, engineering-focused, premium, similar to Porsche's brand language. 
      Focus on the duality of being a curated machinery marketplace and an elite logistics handler.`,
    });
    return response.text || "Musk Mover: Curating industrial power, engineering global movement. We provide the equipment that builds the future and the logistics that make it possible.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Musk Mover: Curating industrial power, engineering global movement. We provide the equipment that builds the future and the logistics that make it possible.";
  }
};
