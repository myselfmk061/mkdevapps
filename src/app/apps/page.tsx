import { Header } from "@/components/header";
import { Apps } from "@/components/sections/apps";
import { Footer } from "@/components/footer";

export default function AppsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Apps />
      </main>
      <Footer />
    </div>
  );
}
