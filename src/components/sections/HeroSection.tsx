import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-primary">
            Transforme Sua Vida Financeira Hoje!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body">
            Descubra o segredo para organizar suas finanças, eliminar dívidas e alcançar seus sonhos com nossa planilha exclusiva.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-[hsl(var(--primary)/0.8)] hover:opacity-90 transition-opacity text-primary-foreground shadow-lg">
            Quero Minha Planilha Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative aspect-video rounded-lg shadow-2xl overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Vídeo de apresentação da planilha financeira"
            fill // Changed from layout="fill"
            className="object-cover transform group-hover:scale-105 transition-transform duration-300" // Changed from objectFit="cover"
            data-ai-hint="finance video"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300">
            <PlayCircle size={80} className="text-white/80 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
