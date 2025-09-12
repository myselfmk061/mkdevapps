import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aboutMe, findImage } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export function About() {
  const profileImage = findImage(aboutMe.profileImageId);

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
              <p className="text-2xl font-semibold text-primary">{aboutMe.title}</p>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {aboutMe.bio}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#contact" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
