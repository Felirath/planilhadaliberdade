
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Shield, LockKeyholeIcon, Flame } from 'lucide-react';
import Link from 'next/link';

const VisaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="#1a1f71"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">VISA</text>
  </svg>
);

const MastercardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="white" stroke="#e0e0e0"/>
    <circle cx="13" cy="12" r="6" fill="#ea001b"/>
    <circle cx="25" cy="12" r="6" fill="#ff5f00"/>
    <path d="M19 12 A6 6 0 0 0 19 12 A6 6 0 0 1 19 12" fill="#f79e1b" />
  </svg>
);


export default function OfertaPlanilha() {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">
            Garanta o Seu <span className="text-primary">Acesso!</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-body">
            Escolha o plano perfeito para transformar sua vida financeira hoje mesmo.
          </p>
        </div>

        <div className="max-w-md mx-auto my-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <Badge className="bg-gradient-orange text-accent-foreground text-sm py-2 px-4 shadow-md w-full justify-center animate-pulse-subtle">
              <Flame className="mr-2 h-5 w-5" /> Atenção: valor promocional de R$19,90 por tempo limitado!
            </Badge>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Plano Básico */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up bg-card rounded-xl" style={{animationDelay: '0.2s'}}>
            <CardHeader className="text-left pt-6 px-6">
              <CardTitle className="font-headline text-xl font-semibold text-card-foreground">Plano Básico</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold text-card-foreground">R$9,90</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow px-6">
              <ul className="space-y-2 mt-4">
                {["Planilha de controle financeiro", "2 meses de acesso", "7 dias de garantia"].map((feature, i) => (
                  <li key={i} className="flex items-center font-body text-sm text-card-foreground/80">
                    <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-gray-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full shadow-md text-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold border-gray-300 rounded-lg h-12"
                asChild
              >
                <Link href="/oferta-especial">Obter Agora</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Plano Premium */}
          <Card 
            className="flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up bg-primary text-primary-foreground rounded-xl relative lg:scale-105"
            style={{ animationDelay: `0.3s` }}
          >
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-orange text-accent-foreground text-xs font-semibold py-1 px-3 shadow-md rounded-full">
              <Flame className="mr-1 h-3 w-3" /> MAIS POPULAR
            </Badge>
            <CardHeader className="text-left pt-10 px-6">
              <CardTitle className="font-headline text-xl font-semibold">Plano Premium</CardTitle>
              <div className="mt-2">
                <span className="text-lg line-through text-primary-foreground/70">R$ 69,90</span>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">R$19,90</span>
                    <Badge variant="default" className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded">ECONOMIA DE R$ 50,00</Badge>
                </div>
                <p className="text-xs text-primary-foreground/80 mt-1">Melhor custo-benefício</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow px-6">
              <ul className="space-y-2 mt-4">
                {[
                  "Planilha de controle financeiro", "Acesso vitalício", "7 dias de garantia",
                  "Tutorial de como usar a planilha", "Guia de como Não Desistir no Primeiro Mês",
                  "10 Hábitos Que Estão Afundando Suas Finanças", "Guia Rápido: Como Economizar Ganhando Pouco",
                  "Método Adeus, Dívidas"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center font-body text-sm text-primary-foreground">
                    <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0 text-primary-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button 
                size="lg" 
                className="w-full shadow-md text-lg bg-gradient-yellow hover:opacity-95 text-black font-bold rounded-lg h-12"
                asChild
              >
                <Link href="https://pay.kirvano.com/1ecb39db-6543-4625-aa73-e08c93dceec7" target="_blank">
                  Obter Agora
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-6 md:mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center items-center space-x-4 mb-4">
                <VisaIcon />
                <MastercardIcon />
                <span className="text-sm font-semibold text-muted-foreground">PIX</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Badge variant="outline" className="py-1.5 px-3 text-xs bg-green-100 text-green-700 border-green-300 rounded-md">
                    <Shield className="mr-1.5 h-4 w-4"/> Garantia 7 dias
                </Badge>
                <Badge variant="outline" className="py-1.5 px-3 text-xs bg-gray-100 text-gray-700 border-gray-300 rounded-md">
                    <LockKeyholeIcon className="mr-1.5 h-4 w-4"/> Pagamento Seguro
                </Badge>
            </div>
        </div>
      </div>
    </section>
  );
}
