'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import VSLPlayer from '@/components/common/VSLPlayer';
import { ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSectionPlanilha() {
  return (
    <section className="py-12 md:py-20 bg-gradient-green-blue text-primary-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline mb-4 animate-fade-in-up">
          Domine Seu Dinheiro e Saia do <span className="text-red-400">Vermelho</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Chega de terminar o mês no vermelho. Descubra onde seu dinheiro vai e recupere o controle AGORA!
        </p>
        
        <div className="max-w-2xl mx-auto mb-8 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <VSLPlayer 
            scriptSrc="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js"
            dataId="684616231282726840ae836d"
          />
        </div>

        <Card className="max-w-md mx-auto bg-card text-card-foreground shadow-xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <CardContent className="p-0">
            <p className="text-sm text-muted-foreground mb-1">Por apenas</p>
            <p className="text-4xl font-bold text-primary mb-4">R$ 9,90</p>
            <Link href="#oferta" passHref>
              <Button size="lg" className="w-full bg-gradient-orange hover:opacity-90 transition-opacity text-accent-foreground font-semibold text-lg shadow-lg mb-3">
                Obter Agora
              </Button>
            </Link>
            <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1 text-primary" />Compra Segura</span>
              <span className="flex items-center"><Sparkles className="h-4 w-4 mr-1 text-primary" />Garantia de 7 dias</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
