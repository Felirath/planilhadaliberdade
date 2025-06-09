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

// Basic SVG for Visa
const VisaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-blue-600">
    <path d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z" fill="#142688"/>
    <path d="M22.6 17.5L20.2 6.5H23.1L25.5 17.5H22.6Z" fill="white"/>
    <path d="M29.2 12.1C29.2 10.3 30.7 9 32.2 9C33.2 9 33.9 9.5 34.4 10L35.1 7.1C34.4 6.7 33.5 6.5 32.5 6.5C30.9 6.5 29.5 7.3 28.7 8.7L26.5 6.6H23.5L27.6 11.6C27.2 11.9 27 12.4 27 12.9C27 14.1 27.9 15.1 29.1 15.1C30.1 15.1 30.9 14.6 31.3 13.9L31.8 15.1C31.1 15.6 30.2 15.8 29.3 15.8C27.7 15.8 26.5 14.9 25.8 13.5L24.8 14.9H21.7L25.9 8.8C26.6 7.6 27.7 6.5 29.2 6.5C30.7 6.5 31.9 7.2 32.5 8.3L30.9 11.1C30.6 10.4 29.9 10.1 29.2 10.1C28.4 10.1 27.8 10.6 27.8 11.3C27.8 11.5 27.9 11.8 28.1 12.1L25.3 17.5H28.3L29.2 15.1C29.7 14.3 30.5 13.8 31.4 13.8C32.4 13.8 33.1 14.3 33.4 15.1L35.7 6.6H38L34.1 17.5H31.1L30.3 15C30.2 14.8 30.1 14.7 30.1 14.6C29.9 14.7 29.8 14.8 29.7 14.9L29.2 15.8C28.7 16.9 27.6 17.7 26.1 17.7C24.1 17.7 22.8 16.5 22.1 14.9L19.4 17.5H16.4L20.9 10.6L18.2 6.6H21.1L22.9 9.6L24.9 6.6H27.8L23.9 12.8C24.4 13.2 24.8 13.7 24.8 14.3C24.8 15.6 23.9 16.6 22.7 16.6C21.6 16.6 20.8 16.1 20.4 15.3L19.7 17.5H16.8L20.2 6.5H23.1L20.7 17.5H18.2C17.6 17.5 17.1 17.2 16.8 16.8L13.2 8.3C12.9 7.8 12.4 7.5 11.8 7.5C11.3 7.5 10.8 7.7 10.5 8.1L7.1 17.5H4.2L8.6 6.5H11.5L9.6 10.8L11.7 14.8L14.7 6.5H17.6L14.3 15.2L15.2 17.5H12.9L11.4 14L9.1 17.5H6.2L10.6 6.5H13.5L9.6 17.5H6.7L3.4 6.5H0.5L5.8 19.9C6.8 22.1 9.1 23.5 11.8 23.5C13.8 23.5 15.5 22.7 16.7 21.4L18.1 23.3C16.9 24.4 15.1 25 13.2 25C10.2 25 7.6 23.4 6.2 20.7L5.2 18.9C4.8 18.2 4.1 17.8 3.3 17.8C2.6 17.8 1.9 18.2 1.5 18.9L0.5 20.7C0.1 21.4 0 22.2 0 23V23.5H0.1V23C0.1 22.3 0.3 21.6 0.7 21L1.7 19.1C2.1 18.5 2.7 18.1 3.4 18.1C4.1 18.1 4.7 18.5 5.1 19.1L6.1 20.9C7.4 23.2 9.9 24.7 12.8 24.7C15.1 24.7 17.1 23.9 18.5 22.5L17.1 20.6C16.1 21.7 14.6 22.3 12.8 22.3C10.5 22.3 8.5 21.2 7.5 19.3L8.4 17.6L11.8 17.6L15.3 10.2L17.7 17.6H19.9L22.6 6.6H19.7L18.1 10.7L16.7 6.6H13.8L10.5 15.2L9.2 17.6H11.7L15.2 10.2L12.9 6.6L11.5 9.7L14.4 17.6H17.3L20.8 6.6L20.9 6.6L20.9 6.6L23.5 17.6H26.5L30.3 8.7C30.7 7.7 31.7 6.6 33.2 6.6C34.5 6.6 35.6 7.2 36.2 8.1L37.1 6.6H34.2L32.5 9.6L30.6 6.6H27.7L31.5 12.8C31.1 13.2 30.7 13.7 30.7 14.3C30.7 15.6 31.6 16.6 32.8 16.6C33.8 16.6 34.6 16.1 35 15.3L35.7 17.5H38L34.6 6.5H31.7L29.2 17.5H26.2L22.6 6.5H19.7L23.5 13.5C23.8 14.1 24.3 14.5 24.9 14.5C25.4 14.5 25.9 14.3 26.2 13.9L29.6 6.5H32.5L28.2 15.2L27.2 17.5H24.9L27.2 13.9C27.6 13.2 28.3 12.8 29.1 12.8C29.8 12.8 30.4 13.1 30.7 13.7L32.2 10.1C31.5 9.5 30.6 9.1 29.5 9.1C28 9.1 26.8 9.9 26.1 11.2L22.6 17.5Z" fill="white"/>
  </svg>
);

// Basic SVG for Mastercard
const MastercardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <circle cx="15" cy="12" r="7" fill="#EB001B"/>
    <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
    <path d="M20 12A7.5 7.5 0 0 1 15.5 18A7.5 7.5 0 0 1 11 12A7.5 7.5 0 0 1 15.5 6A7.5 7.5 0 0 1 20 12Z" fill="#FF5F00"/>
  </svg>
);


export default function OfertaPlanilha() {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-secondary-foreground">
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
                <VisaIcon />
                <MastercardIcon />
                <div className="flex items-center space-x-1">
                  <PixIcon />
                  <span className="text-sm font-medium text-muted-foreground">PIX</span>
                </div>
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
