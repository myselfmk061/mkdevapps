import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type App = {
  id: string;
  name: string;
  logoId: string;
  summary: string;
  category: string;
  appStoreUrl: string;
  playStoreUrl: string;
};

export const appCategories: string[] = [];

export const apps: App[] = [];

export const aboutMe = {
  name: "Mahendra Bairwa (MK)",
  title: "CEO & Founder",
  bio: "As CEO of MK Dev Company Ltd., I lead a passionate team in creating innovative digital solutions. With years of experience in app development and technology leadership, I focus on building products that make a real difference in people's lives. My vision is to bridge the gap between complex technology and user-friendly experiences.",
  profileImageId: "profile-pic",
  skills: [
    "React Native",
    "Swift (iOS)",
    "Kotlin (Android)",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Firebase",
    "UI/UX Design",
    "Next.js",
    "Vercel",
    "GitHub",
    "HTML",
    "CSS",
    "GraphQL",
    "Jest",
    "Docker",
    "PostgreSQL",
    "REST APIs",
    "Supabase",
    "Database"
  ],
  aiSkills: [
    "Genkit",
    "Gemini",
    "Large Language Models (LLMs)",
    "Prompt Engineering",
    "OpenAI",
    "ChatGPT",
    "GitHub Copilot",
    "Microsoft Copilot",
    "Gemini 2.5 Flash Image (a.k.a. nano-banana)"
  ]
};

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
