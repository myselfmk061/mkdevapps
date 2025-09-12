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

export const appCategories: string[] = ["Productivity", "Social", "Finance"];

export const apps: App[] = [
  {
    id: "1",
    name: "TaskMaster",
    logoId: "app_logo_1",
    summary: "An intuitive task manager designed to streamline your workflow and boost your daily productivity with smart reminders.",
    category: "Productivity",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: "2",
    name: "ConnectSphere",
    logoId: "app_logo_2",
    summary: "A next-generation social network that connects you with like-minded individuals through shared interests and local events.",
    category: "Social",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: "3",
    name: "WalletWise",
    logoId: "app_logo_3",
    summary: "Take control of your finances with WalletWise. Track expenses, set budgets, and achieve your financial goals with ease.",
    category: "Finance",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: "4",
    name: "EventHorizon",
    logoId: "app_logo_4",
    summary: "Discover and organize your events effortlessly. From local meetups to global conferences, never miss an opportunity.",
    category: "Productivity",
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
];

export const aboutMe = {
  name: "Alex Doe",
  title: "Senior Mobile Developer",
  bio: "A passionate and creative mobile developer with over a decade of experience in building beautiful, functional, and user-centric applications for both iOS and Android. My journey in software development is driven by a constant desire to learn, innovate, and solve real-world problems through code. When I'm not developing apps, I enjoy exploring the great outdoors and contributing to open-source projects.",
  profileImageId: "developer_profile"
};

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
