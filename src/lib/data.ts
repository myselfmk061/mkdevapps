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
  name: "Myselfmk",
  title: "Creative App Developer",
  bio: "I'm a passionate and results-oriented app developer with a knack for creating intuitive and engaging user experiences. With a strong foundation in both design and development, I enjoy turning complex problems into beautiful, functional, and user-centric mobile applications.",
  profileImageId: "profile-pic",
  skills: [
    "React Native",
    "Swift (iOS)",
    "Kotlin (Android)",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Firebase",
    "UI/UX Design"
  ]
};

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
