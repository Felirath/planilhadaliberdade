'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import VSLPlayer from '@/components/common/VSLPlayer';
import { ShieldCheck, Sparkles, ShoppingCart, Flame, LockKeyhole, CreditCardIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const PixIconHero = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground">
    {/* Simplified PIX icon path for brevity, or use a more detailed one if needed */}
    <path d="M128 56C119.19 56 110.45 58.1701 102.49 62.3901C94.5301 66.6101 87.5501 72.7701 82.0901 80.4201L94.9901 93.3301C99.2701 87.4401 104.901 82.7901 111.401 79.7801C117.901 76.7701 125.06 75.4801 132.21 76.0101C139.36 76.5401 146.23 78.8701 152.22 82.8101C158.21 86.7501 163.11 92.1801 166.47 98.6701L179.38 111.58C185.001 100.68 187.301 88.1001 185.921 75.8301C184.541 63.5601 179.571 52.3401 171.901 43.7801C164.231 35.2201 154.291 29.7201 143.341 28.0001C132.391 26.2601 121.051 28.3801 111.251 34.0601L123.98 46.8101C118.49 41.7001 111.99 38.8301 105.09 38.4401C98.1901 38.0501 91.3701 40.1701 85.8701 44.2801L61.7801 68.4101C59.5001 76.9001 58.2701 85.5601 58.1401 94.2701C57.9401 107.21 61.0501 119.95 67.1001 130.96C73.1501 141.97 81.8601 150.77 92.2801 156.45C102.701 162.13 114.381 164.45 126.091 163.13C137.801 161.81 148.91 156.9 158.09 149L128 56Z"/>
  </svg>
);
const SmartphoneIconHero = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-muted-foreground">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);


export default function HeroSectionPlanilha() {
  return (
    <section className="py-12 md:py-20 bg-gradient-green-blue text-primary-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline mb-4 animate-scale-in-fade-in" style={{ animationDelay: '0.1s' }}>
          Domine Seu Dinheiro e Saia do <span className="text-red-400">Vermelho</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Chega de terminar o mês no vermelho. Descubra onde seu dinheiro vai e recupere o controle AGORA!
        </p>
        
        <div className="max-w-2xl mx-auto mb-10 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <VSLPlayer 
            scriptSrc="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js"
            dataId="684616231282726840ae836d"
          />
        </div>

        <Card className="max-w-xs mx-auto bg-card text-card-foreground shadow-xl p-4 md:p-6 animate-fade-in-up rounded-2xl border border-primary/20" style={{ animationDelay: '0.7s' }}>
          <CardContent className="p-0 text-center">
            <Badge className="mb-3 py-1.5 px-3 text-xs bg-primary/20 text-primary-foreground font-semibold rounded-full animate-pulse-subtle">
              <Flame className="h-4 w-4 mr-1 text-primary" /> OFERTA LIMITADA - ÚLTIMAS HORAS
            </Badge>
            <p className="text-sm text-muted-foreground line-through">R$ 29,90</p>
            <p className="text-5xl font-bold text-primary my-1">R$ 9,90</p>
            <p className="text-xs text-muted-foreground mb-4">Apenas hoje com 67% OFF</p>
            
            <Link href="#oferta" passHref>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-[hsl(var(--primary)/0.8)] hover:opacity-90 hover:scale-105 transform transition-all duration-300 text-primary-foreground font-semibold text-lg shadow-lg mb-4 rounded-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Obter Agora
              </Button>
            </Link>
            <div className="flex items-center justify-center space-x-3 mb-2">
                <CreditCardIcon className="h-5 w-5 text-muted-foreground" data-ai-hint="credit card"/>
                {/* Placeholder for second card type or adjust as needed */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card h-5 w-5 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                <PixIconHero />
                <SmartphoneIconHero />
            </div>
            <div className="flex items-center justify-center text-xs text-muted-foreground">
              <LockKeyhole className="h-3 w-3 mr-1 text-primary" />
              Pagamento 100% Seguro <span className="mx-1">•</span> Garantia de 7 dias
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
