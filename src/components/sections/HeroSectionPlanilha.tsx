'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Script from 'next/script';
import { ShieldCheck, ShoppingCart, Flame, LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';


const VisaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto text-gray-300">
    <rect width="38" height="24" rx="3" fill="currentColor" />
    <text x="19" y="16" textAnchor="middle" fontSize="10" fill="#111" fontWeight="bold">VISA</text>
  </svg>
);

const MastercardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="#222" />
    <circle cx="12" cy="12" r="7" fill="#F79E1B"/>
    <circle cx="26" cy="12" r="7" fill="#FF5F00" opacity="0.8"/>
  </svg>
);

const GenericCardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto text-gray-300">
    <rect width="38" height="24" rx="3" fill="currentColor"/>
    <rect x="4" y="16" width="10" height="3" rx="1" fill="#111" />
    <rect x="4" y="5" width="6" height="4" rx="1" fill="#111" />
  </svg>
);

const PixIcon = () => (
  <span className="text-lg font-semibold text-primary">PIX</span>
);


export default function HeroSectionPlanilha() {
  return (
    <section className="py-12 md:py-20 bg-gradient-dark-green text-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-headline mb-4 animate-scale-in-fade-in" style={{ animationDelay: '0.1s' }}>
          DESCUBRA PRA ONDE SEU DINHEIRO ESTÁ INDO EM <span className="text-gradient-gold">MENOS DE 10 MINUTOS</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Recupere o controle financeiro com a planilha que já ajudou <span className="text-gradient-gold">mais de 3000 pessoas</span> a saírem do sufoco
        </p>

        <div
            className="max-w-2xl mx-auto mb-10 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
        >
          <div dangerouslySetInnerHTML={{ __html: `
            <style>wistia-player[media-id='uyy6sy3t7f']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/uyy6sy3t7f/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style>
            <wistia-player media-id="uyy6sy3t7f" aspect="0.5625"></wistia-player>
            `}} />
            <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
            <Script src="https://fast.wistia.com/embed/uyy6sy3t7f.js" strategy="lazyOnload" type="module" />
        </div>

        <Card className="max-w-xs mx-auto bg-card text-card-foreground shadow-xl p-4 md:p-6 animate-fade-in-up rounded-2xl border border-border" style={{ animationDelay: '0.7s' }}>
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
