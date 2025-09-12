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
  title: "Creative App Developer",
  bio: "I'm the kind of person who gets excited about turning a cool idea into a real, working app that people can enjoy. For me, it's all about making technology feel intuitive and natural. I love the challenge of taking a complex problem and finding a simple, elegant solution that's both beautiful and functional.",
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
