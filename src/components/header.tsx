import Link from 'next/link';
import { Aperture } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '/#apps', label: 'Apps' },
    { href: '/#about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Aperture className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Myselfmk Apps
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
