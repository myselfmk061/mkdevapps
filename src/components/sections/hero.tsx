import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  const text = "hello welcome to Myselfmk Apps Portfolio";
  
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-hello tracking-tighter text-primary animated-hello-pulse">
              {text}
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              A curated collection of modern, user-friendly applications. Explore my work below.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#contact">
              <Button>Get in Touch</Button>
            </Link>
            <Link href="#apps">
              <Button variant="secondary">Browse Apps</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
