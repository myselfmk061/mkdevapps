import Image from 'next/image';
import Link from 'next/link';
import type { App } from '@/lib/data';
import { findImage } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AppleStoreIcon, GooglePlayIcon } from '@/components/icons';

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  const logo = findImage(app.logoId);

  return (
    <Card className="flex flex-col h-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader className="flex flex-row items-center gap-4">
        {logo && (
          <Image
            src={logo.imageUrl}
            alt={`${app.name} logo`}
            data-ai-hint={logo.imageHint}
            width={64}
            height={64}
            className="rounded-lg"
          />
        )}
        <CardTitle className="font-headline text-xl">{app.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80">{app.summary}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={app.appStoreUrl}><AppleStoreIcon className="mr-2 h-4 w-4" /> App Store</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={app.playStoreUrl}><GooglePlayIcon className="mr-2 h-4 w-4" /> Google Play</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
