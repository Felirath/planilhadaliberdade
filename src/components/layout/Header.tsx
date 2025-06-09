import { Landmark } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 px-6 md:px-10 bg-gradient-to-r from-primary to-[hsl(149,68%,50%)] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary-foreground hover:opacity-90 transition-opacity">
          <Landmark size={32} />
          <h1 className="text-2xl font-headline">Liberdade Financeira</h1>
        </Link>
        {/* Navigation links can be added here if needed */}
      </div>
    </header>
  );
}
