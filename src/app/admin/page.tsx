import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Welcome, Admin!</h1>
          <p className="text-foreground/80">This is your secure admin dashboard.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
