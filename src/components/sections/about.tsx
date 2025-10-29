import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { aboutMe, findImage } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export function About() {
  const profileImage = findImage(aboutMe.profileImageId);

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-6">
            {profileImage && (
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
                  fill
                  className="rounded-full object-cover shadow-lg"
                />
              </div>
            )}
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">{aboutMe.name}</h2>
                <p className="text-xl font-semibold text-primary">{aboutMe.title}</p>
                <p className="text-lg text-muted-foreground">CEO of MK Dev Company Ltd.</p>
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
                <Link href="/contact" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">About Me</h3>
              <p className="text-foreground/80 text-lg">
                {aboutMe.bio}
              </p>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {aboutMe.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-base px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">AI Skills</h3>
              <div className="flex flex-wrap gap-2">
                {aboutMe.aiSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-base px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
