import Link from 'next/link';
import { AppCard } from '@/components/app-card';
import { apps } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function FeaturedApps() {
  const featuredApps = apps.slice(0, 3);

  return (
    <section id="featured-apps" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Apps</h2>
            <p className="mx-auto max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a peek at some of my proudest work. From productivity tools to creative outlets, each project is a testament to my commitment to quality, user-centric design, and cutting-edge technology. Explore the apps below to see what I've been building.
            </p>
          <Link href="/apps">
            <Button variant="outline">View All Apps</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
