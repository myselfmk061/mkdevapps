import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
