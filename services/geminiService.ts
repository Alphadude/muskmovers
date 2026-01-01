
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client strictly using process.env.API_KEY as per naming parameter guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBrandDescription = async (context: string) => {
  try {
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
