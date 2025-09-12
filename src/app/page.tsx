import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Apps } from "@/components/sections/apps";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Apps />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
