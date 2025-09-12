import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/footer";
import { FeaturedApps } from "@/components/sections/featured-apps";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedApps />
      </main>
      <Footer />
    </div>
  );
}
