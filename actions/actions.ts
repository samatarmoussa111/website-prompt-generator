"use server";

import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Remplace "YOUR_API_KEY" par ta clé API Gemini
const apiKey = process.env.GEMINI_API_KEY;

export async function generateSectionDescription(
  pageType: string,
  sectionType: string
) {
  const prompt = `Imagine you are an expert in prompt creation. Your task is to craft a detailed and precise prompt for generating a website section. The section is named '${sectionType}' and is located on a '${pageType}' page. The prompt should instruct the design AI to include elements such as professional animations, interactive features, and optimized user experience. It must also emphasize modern web design practices, ensuring the section is visually appealing, functional, and user-friendly. Make the prompt concise, actionable, and ready for direct use.`;

  const response = await textGenTextOnlyPrompt(prompt);
  return response;
}

// Fonction pour générer du texte avec l'API Gemini
async function generateTextGemini(prompt: string) {
  try {
    const response = await axios.post(
      "https://gemini-ai.googleapis.com/v1/generateText", // Remplace avec l'URL exacte si elle est différente
      {
        model: "gemini-2", // Modèle à utiliser (par exemple gemini-1 ou gemini-2)
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Extraire le texte généré
    const generatedText = response.data.choices[0].text;
    return { success: true, suggestion: generatedText };
  } catch (error) {
    return { success: false, suggestion: "Erreur lors de la génération." };
  }
}

async function textGenTextOnlyPrompt(prompt: string) {
  // [START text_gen_text_only_prompt]
  // Make sure to include these imports:
  // import { GoogleGenerativeAI } from "@google/generative-ai";

  try {
    const result = await model.generateContent(prompt);
    return { success: true, suggestion: result.response.text() };
  } catch (error) {
    return { success: false, suggestion: "Erreur lors de la génération." };
  }
}
