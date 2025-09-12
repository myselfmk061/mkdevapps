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
  name: "",
  title: "",
  bio: "",
  profileImageId: ""
};

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
