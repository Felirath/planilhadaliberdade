
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 px-6 md:px-10 bg-[#2e3138] sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="https://i.imgur.com/AJlCe1k.png"
            alt="Liberdade Financeira Logo"
            width={160} 
            height={40} 
            className="rounded-sm"
            data-ai-hint="company logo"
          />
        </Link>
        <Button 
          asChild 
          className="bg-gradient-orange hover:opacity-90 text-accent-foreground font-semibold shadow-md hover:scale-105 transform transition-transform duration-300"
          size="lg"
        >
          <Link href="#oferta">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Garanta Já
          </Link>
        </Button>
      </div>
    </header>
  );
}
