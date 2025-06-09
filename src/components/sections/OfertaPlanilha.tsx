import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Shield, LockKeyholeIcon, CreditCard, Sparkles, AlertTriangle, Flame } from 'lucide-react';
import Link from 'next/link';

const PixIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-muted-foreground">
    <path d="M148.87 111.21L128.13 90.52L107.27 111.34C106.11 112.5 105.51 114.04 105.53 115.62C105.56 117.2 106.22 118.71 107.36 119.86L128 140.45L148.73 119.76C149.88 118.61 150.53 117.11 150.53 115.53C150.53 113.95 149.93 112.41 148.76 111.25L148.87 111.21ZM216 128C216 136.81 213.83 145.55 209.61 153.51C205.39 161.47 199.23 168.45 191.58 173.91L178.67 161C184.56 156.72 189.21 151.09 192.22 144.59C195.23 138.09 196.52 130.93 195.99 123.78C195.46 116.63 193.13 109.76 189.19 103.77C185.25 97.7802 179.82 92.8802 173.33 89.5202L160.42 76.6102C171.32 70.9902 183.9 68.6902 196.17 70.0702C208.44 71.4502 219.66 76.4202 228.22 84.0902C236.78 91.7602 242.28 101.7 244.02 112.65C245.76 123.6 243.64 134.94 237.94 144.74L225.19 132.01C229.3 126.52 231.42 119.69 231.03 112.79C230.64 105.89 227.77 99.3902 222.86 94.4802C217.95 89.5702 211.45 86.7002 204.55 86.3102C197.65 85.9202 190.82 88.0402 185.33 92.1502L154.89 61.7802C163.38 59.5002 172.04 58.2702 180.75 58.1402C193.69 57.9402 206.43 61.0502 217.44 67.1002C228.45 73.1502 237.25 81.8602 242.93 92.2802C248.61 102.7 250.93 114.38 249.61 126.09C248.29 137.8 243.38 148.91 235.49 158.09L216 128Z" fill="currentColor"/>
    <path d="M128 56C119.19 56 110.45 58.1701 102.49 62.3901C94.5301 66.6101 87.5501 72.7701 82.0901 80.4201L94.9901 93.3301C99.2701 87.4401 104.901 82.7901 111.401 79.7801C117.901 76.7701 125.06 75.4801 132.21 76.0101C139.36 76.5401 146.23 78.8701 152.22 82.8101C158.21 86.7501 163.11 92.1801 166.47 98.6701L179.38 111.58C185.001 100.68 187.301 88.1001 185.921 75.8301C184.541 63.5601 179.571 52.3401 171.901 43.7801C164.231 35.2201 154.291 29.7201 143.341 28.0001C132.391 26.2601 121.051 28.3801 111.251 34.0601L123.98 46.8101C118.49 41.7001 111.99 38.8301 105.09 38.4401C98.1901 38.0501 91.3701 40.1701 85.8701 44.2801L61.7801 68.4101C59.5001 76.9001 58.2701 85.5601 58.1401 94.2701C57.9401 107.21 61.0501 119.95 67.1001 130.96C73.1501 141.97 81.8601 150.77 92.2801 156.45C102.701 162.13 114.381 164.45 126.091 163.13C137.801 161.81 148.91 156.9 158.09 149L128 56Z" fill="currentColor"/>
  </svg>
);

const BlueCardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="#2563eb"/>
    <rect x="4" y="16" width="10" height="3" rx="1" fill="white" fillOpacity="0.7"/>
    <rect x="4" y="5" width="6" height="4" rx="1" fill="white" fillOpacity="0.5"/>
  </svg>
);

const RedCardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <rect width="38" height="24" rx="3" fill="#dc2626"/>
    <rect x="4" y="16" width="10" height="3" rx="1" fill="white" fillOpacity="0.7"/>
    <rect x="4" y="5" width="6" height="4" rx="1" fill="white" fillOpacity="0.5"/>
  </svg>
);


export default function OfertaPlanilha() {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-background"> {/* Changed to bg-background */}
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground"> {/* Changed to text-foreground */}
            Garanta o Seu <span className="text-primary">Acesso!</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-body">
            Escolha o plano perfeito para transformar sua vida financeira hoje mesmo.
          </p>
        </div>

        <div className="max-w-md mx-auto my-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <Badge className="bg-gradient-orange text-accent-foreground text-sm py-2 px-4 shadow-md w-full justify-center animate-pulse-subtle">
              <AlertTriangle className="mr-2 h-5 w-5" /> Atenção: valor promocional de R$19,90 por tempo limitado!
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

        <div className="mt-10 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center items-center space-x-4 mb-4">
                <BlueCardIcon />
                <RedCardIcon />
                <PixIcon />
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
