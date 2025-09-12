import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Myselfmk Apps. All rights reserved.
        </p>
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          Admin
        </Link>
      </div>
    </footer>
  );
}
