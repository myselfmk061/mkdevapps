import { AppCard } from '@/components/app-card';
import { apps, appCategories } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export function Apps() {
  return (
    <section id="apps" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Applications</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's a selection of apps I've designed and developed. Each project showcases my commitment to quality and user experience.
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-12">
          {appCategories.map((category) => {
            const categoryApps = apps.filter(app => app.category === category);
            if (categoryApps.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-2xl font-bold tracking-tight mb-6">{category}</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
