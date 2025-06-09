
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import VSLPlayer from '@/components/common/VSLPlayer';
import { ShieldCheck, Sparkles, ShoppingCart, Flame, LockKeyhole, CreditCardIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';


const VisaIcon = () => (
  <svg width="40" height="25" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="60" height="40" rx="5" fill="#0057A0"/>
    <text x="30" y="27" fontFamily="Arial, sans-serif" fontSize="20" fill="white" textAnchor="middle" fontWeight="bold">VISA</text>
  </svg>
);

const MastercardIcon = () => (
  <svg width="40" height="25" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="60" height="40" rx="5" fill="#EB001B"/>
    <circle cx="22" cy="20" r="12" fill="#F79E1B"/>
    <circle cx="38" cy="20" r="12" fill="#FF5F00" opacity="0.8"/>
    <text x="30" y="35" fontFamily="Arial, sans-serif" fontSize="8" fill="white" textAnchor="middle">mastercard</text>
  </svg>
);

const GenericCardIcon = () => (
  <svg width="40" height="25" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="60" height="40" rx="5" fill="#4A5568"/>
    <rect x="5" y="25" width="30" height="5" rx="2" fill="#CBD5E0"/>
    <rect x="5" y="8" width="10" height="7" rx="1" fill="#CBD5E0"/>
  </svg>
);

const PixTextIcon = () => (
  <svg width="40" height="25" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <text x="30" y="28" fontFamily="Arial, sans-serif" fontSize="24" fill="#24bc6e" textAnchor="middle" fontWeight="bold">PIX</text>
  </svg>
);


export default function HeroSectionPlanilha() {
  const videoId = "684616231282726840ae836d"; 
  const playerScriptSrc = "https://scripts.converteai.net/0b110d1c-1188-49ac-8ddf-f6c4b4be375e/players/684616231282726840ae836d/player.js";
  const thumbnailSrc = "https://images.converteai.net/0b110d1c-1188-49ac-8ddf-f6c4b4be375e/players/684616231282726840ae836d/thumbnail.jpg";


  return (
    <section className="py-12 md:py-20 bg-gradient-green-blue text-primary-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline mb-4 animate-scale-in-fade-in" style={{ animationDelay: '0.1s' }}>
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
            <Badge className="mb-3 py-1.5 px-3 text-sm bg-accent text-accent-foreground font-semibold rounded-full animate-pulse-subtle">
              <Flame className="h-4 w-4 mr-1" /> OFERTA LIMITADA - ÚLTIMAS HORAS
            </Badge>
            <p className="text-sm text-muted-foreground">Por apenas</p>
            <p className="text-5xl font-bold text-primary my-1">R$ 9,90</p>
            
            <Link href="#oferta" passHref>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-[hsl(var(--primary)/0.8)] hover:opacity-90 hover:scale-105 transform transition-all duration-300 text-primary-foreground font-semibold text-lg shadow-lg mb-4 rounded-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Obter Agora
              </Button>
            </Link>
            <div className="flex items-center justify-center space-x-2 mb-2">
                <VisaIcon />
                <MastercardIcon />
                <GenericCardIcon />
                <PixTextIcon />
            </div>
            <div className="flex items-center justify-center text-xs text-muted-foreground">
              <LockKeyhole className="h-3 w-3 mr-1 text-primary" />
              Compra Segura <span className="mx-1">•</span> Garantia de 7 dias
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

