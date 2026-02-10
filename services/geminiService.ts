
import { GoogleGenAI, Type } from "@google/genai";
import { BlogInputs, GeneratedContent } from "../types";

export const generateBlogContent = async (inputs: BlogInputs): Promise<GeneratedContent> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Write a comprehensive blog post and related assets based on these details:
  Topic: ${inputs.topic}
  Target Audience: ${inputs.audience}
  Tone: ${inputs.tone}
  Key Points to cover: ${inputs.keyPoints}

  Please generate:
  1. A compelling blog post title.
  2. A detailed blog post in Markdown format (at least 600 words).
  3. SEO meta title and meta description.
  4. Short social media captions for LinkedIn, Twitter, and Instagram.
  5. A short email newsletter blurb to promote this post.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          blogPost: { type: Type.STRING },
          seoTitle: { type: Type.STRING },
          seoDescription: { type: Type.STRING },
          socialCaptions: {
            type: Type.OBJECT,
            properties: {
              linkedin: { type: Type.STRING },
              twitter: { type: Type.STRING },
              instagram: { type: Type.STRING }
            },
            required: ["linkedin", "twitter", "instagram"]
          },
          emailNewsletter: { type: Type.STRING }
        },
        required: ["title", "blogPost", "seoTitle", "seoDescription", "socialCaptions", "emailNewsletter"]
      }
    }
  });

  const result = JSON.parse(response.text.trim());
  return result as GeneratedContent;
};
