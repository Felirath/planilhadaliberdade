
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import VSLPlayer from '@/components/common/VSLPlayer';
import { ShieldCheck, ShoppingCart, Flame, LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';


const VisaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="#2563eb"/>
    <rect x="4" y="16" width="10" height="3" rx="1" fill="white" fillOpacity="0.7"/>
    <rect x="4" y="5" width="6" height="4" rx="1" fill="white" fillOpacity="0.5"/>
  </svg>
);

const MastercardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="#dc2626"/>
    <circle cx="12" cy="12" r="7" fill="#F79E1B"/>
    <circle cx="26" cy="12" r="7" fill="#FF5F00" opacity="0.8"/>
  </svg>
);

const GenericCardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="#4A5568"/>
    <rect x="4" y="16" width="10" height="3" rx="1" fill="#CBD5E0"/>
    <rect x="4" y="5" width="6" height="4" rx="1" fill="#CBD5E0"/>
  </svg>
);

const PixIcon = () => (
  <span className="text-lg font-semibold text-green-600">PIX</span>
);


export default function HeroSectionPlanilha() {
  const videoId = "684761e50eee7072de674c8f";
  const playerScriptSrc = "https://scripts.converteai.net/0b110d1c-1188-49ac-8ddf-f6c4b4be375e/players/684761e50eee7072de674c8f/player.js";
  const thumbnailSrc = "https://images.converteai.net/0b110d1c-1188-49ac-8ddf-f6c4b4be375e/players/684761e50eee7072de674c8f/thumbnail.jpg";


  return (
    <section className="py-12 md:py-20 bg-gradient-dark-green-gold text-primary-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-headline mb-4 animate-scale-in-fade-in" style={{ animationDelay: '0.1s' }}>
          Domine Seu Dinheiro e Saia do <span className="text-red-400">Vermelho</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Chega de terminar o mês no vermelho. Descubra onde seu dinheiro vai e recupere o controle AGORA!
        </p>

        <div
            className="max-w-2xl mx-auto mb-10 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
        >
          <VSLPlayer
            videoId={videoId}
            playerScriptSrc={playerScriptSrc}
            thumbnailSrc={thumbnailSrc}
          />
        </div>

        <Card className="max-w-xs mx-auto bg-card text-card-foreground shadow-xl p-4 md:p-6 animate-fade-in-up rounded-2xl border border-primary/20" style={{ animationDelay: '0.7s' }}>
          <CardContent className="p-0 text-center">
            <Badge className="mb-6 py-1.5 px-3 text-sm bg-accent text-accent-foreground font-semibold rounded-full animate-pulse-subtle">
              <Flame className="h-4 w-4 mr-1" /> OFERTA LIMITADA - ÚLTIMAS HORAS
            </Badge>
            <p className="text-sm text-muted-foreground mb-2">Por apenas</p>
            <p className="text-5xl font-bold text-primary my-1 mb-6">R$ 9,90</p>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-[hsl(var(--primary)/0.8)] hover:opacity-90 text-primary-foreground font-semibold text-lg shadow-lg mb-6 rounded-lg"
              asChild
            >
              <Link href="#oferta">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Obter Agora
              </Link>
            </Button>

            <div className="flex items-center justify-center space-x-2 mb-4">
                <VisaIcon />
                <MastercardIcon />
                <GenericCardIcon />
                <PixIcon />
            </div>
            <div className="flex flex-col items-center text-xs text-muted-foreground space-y-1">
              <div className="flex items-center">
                <LockKeyhole className="h-3 w-3 mr-1 text-primary" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center mt-1">
                <ShieldCheck className="h-3 w-3 mr-1 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
