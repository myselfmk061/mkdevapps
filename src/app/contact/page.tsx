import { Header } from "@/components/header";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
