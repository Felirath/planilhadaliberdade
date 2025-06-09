'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Gift, CheckCircle2, Shield, LockKeyholeIcon, CreditCard, XCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PixIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-foreground/80"> {/* Adjusted color for better visibility on green card */}
    <path d="M148.87 111.21L128.13 90.52L107.27 111.34C106.11 112.5 105.51 114.04 105.53 115.62C105.56 117.2 106.22 118.71 107.36 119.86L128 140.45L148.73 119.76C149.88 118.61 150.53 117.11 150.53 115.53C150.53 113.95 149.93 112.41 148.76 111.25L148.87 111.21ZM216 128C216 136.81 213.83 145.55 209.61 153.51C205.39 161.47 199.23 168.45 191.58 173.91L178.67 161C184.56 156.72 189.21 151.09 192.22 144.59C195.23 138.09 196.52 130.93 195.99 123.78C195.46 116.63 193.13 109.76 189.19 103.77C185.25 97.7802 179.82 92.8802 173.33 89.5202L160.42 76.6102C171.32 70.9902 183.9 68.6902 196.17 70.0702C208.44 71.4502 219.66 76.4202 228.22 84.0902C236.78 91.7602 242.28 101.7 244.02 112.65C245.76 123.6 243.64 134.94 237.94 144.74L225.19 132.01C229.3 126.52 231.42 119.69 231.03 112.79C230.64 105.89 227.77 99.3902 222.86 94.4802C217.95 89.5702 211.45 86.7002 204.55 86.3102C197.65 85.9202 190.82 88.0402 185.33 92.1502L154.89 61.7802C163.38 59.5002 172.04 58.2702 180.75 58.1402C193.69 57.9402 206.43 61.0502 217.44 67.1002C228.45 73.1502 237.25 81.8602 242.93 92.2802C248.61 102.7 250.93 114.38 249.61 126.09C248.29 137.8 243.38 148.91 235.49 158.09L216 128Z" fill="currentColor"/>
    <path d="M128 56C119.19 56 110.45 58.1701 102.49 62.3901C94.5301 66.6101 87.5501 72.7701 82.0901 80.4201L94.9901 93.3301C99.2701 87.4401 104.901 82.7901 111.401 79.7801C117.901 76.7701 125.06 75.4801 132.21 76.0101C139.36 76.5401 146.23 78.8701 152.22 82.8101C158.21 86.7501 163.11 92.1801 166.47 98.6701L179.38 111.58C185.001 100.68 187.301 88.1001 185.921 75.8301C184.541 63.5601 179.571 52.3401 171.901 43.7801C164.231 35.2201 154.291 29.7201 143.341 28.0001C132.391 26.2601 121.051 28.3801 111.251 34.0601L123.98 46.8101C118.49 41.7001 111.99 38.8301 105.09 38.4401C98.1901 38.0501 91.3701 40.1701 85.8701 44.2801L61.7801 68.4101C59.5001 76.9001 58.2701 85.5601 58.1401 94.2701C57.9401 107.21 61.0501 119.95 67.1001 130.96C73.1501 141.97 81.8601 150.77 92.2801 156.45C102.701 162.13 114.381 164.45 126.091 163.13C137.801 161.81 148.91 156.9 158.09 149L128 56Z" fill="currentColor"/>
  </svg>
);


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="font-mono text-xl md:text-2xl">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
};


export default function OfertaEspecialPage() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 py-3 px-4 md:px-6 bg-destructive text-destructive-foreground shadow-md">
        <div className="container mx-auto flex items-center justify-center text-center">
          <Clock className="h-6 w-6 mr-2 animate-pulse" style={{animationDuration: '1.5s'}} />
          <p className="text-md md:text-lg font-semibold">
            Esta oferta expira em breve! Tempo restante: {isClient && <CountdownTimer />}
          </p>
        </div>
      </header>

      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-2xl mx-auto bg-gradient-orange text-accent-foreground p-6 md:p-8 rounded-xl shadow-xl mb-12 text-center animate-scale-in-fade-in">
            <Gift className="h-16 w-16 mx-auto mb-4 animate-pulse-subtle" style={{animationDelay: '0.2s'}} />
            <CardTitle className="text-2xl md:text-3xl font-headline mb-2">
              🎉 PARABÉNS! VOCÊ GANHOU UM DESCONTO EXCLUSIVO!
            </CardTitle>
            <p className="text-lg">
              Oferta especial só para você que estava considerando o plano básico.
            </p>
          </Card>

          <section className="max-w-3xl mx-auto mb-12 text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-destructive mb-4 flex items-center justify-center">
              <XCircle className="inline-block h-10 w-10 lg:h-12 lg:w-12 mr-3 animate-pulse-subtle" /> PARE! NÃO COMETA ESSE ERRO
            </h2>
            <p className="text-xl font-semibold text-muted-foreground mb-2">
              Você estava prestes a escolher o plano básico por R$ 9,90...
            </p>
            <p className="text-lg text-foreground bg-destructive/10 p-4 rounded-md shadow-md">
              <strong>MAS ISSO SERIA UM GRANDE ERRO!</strong> Você perderia acesso vitalício e todos os bônus exclusivos que podem transformar sua vida financeira para sempre.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-red-100 border-2 border-red-500 p-6 rounded-lg shadow-lg animate-fade-in-up hover:shadow-xl transition-shadow" style={{animationDelay: '0.5s'}}>
              <h3 className="text-xl font-bold text-red-700 mb-3">Por que você NÃO deve escolher o básico:</h3>
              <ul className="space-y-2 text-red-600">
                {["Apenas 2 meses de acesso (depois você perde tudo)", "Sem tutorial para usar a planilha", "Sem os 5 bônus que valem mais de R$ 200", "Você vai ficar perdido sem orientação"].map(item => (
                  <li key={item} className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-0.5 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-100 border-2 border-green-600 p-6 rounded-lg shadow-lg animate-fade-in-up hover:shadow-xl transition-shadow" style={{animationDelay: '0.6s'}}>
              <h3 className="text-xl font-bold text-green-700 mb-3">PORQUE VOCÊ DEVE ESCOLHER O PLANO PREMIUM:</h3>
              <ul className="space-y-2 text-green-600">
                {["Acesso VITALÍCIO", "Tutorial completo com orientação completa", "5 bônus exclusivos", "R$ 54,00 de economia"].map(item => (
                  <li key={item} className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <Card className="max-w-md mx-auto bg-gradient-green text-primary-foreground p-6 md:p-8 rounded-xl shadow-2xl animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <CardHeader className="p-0 text-center mb-4">
              <CardTitle className="text-2xl md:text-3xl font-headline">OFERTA ESPECIAL DO PLANO PREMIUM</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-center">
              <p className="text-xl line-through text-primary-foreground/70">De R$ 69,90</p>
              <p className="text-2xl line-through text-red-300">Por R$ 19,90</p>
              <p className="text-5xl font-bold my-2 text-yellow-300">AGORA: R$ 15,90</p>
              <Button 
                size="lg" 
                className="w-full text-xl font-bold bg-gradient-yellow hover:opacity-90 hover:scale-105 transform transition-transform duration-300 text-black shadow-lg mt-6 mb-4"
                asChild
              >
                <Link href="https://pay.kirvano.com/a144445e-a658-47dc-b4dc-a2097ae06223" target="_blank">
                  Obter Agora <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>

              <div className="flex justify-center items-center space-x-3 mb-3">
                  <CreditCard className="h-7 w-7 text-primary-foreground/80" />
                  <PixIcon /> {/* Adjusted color in component */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-banknote h-7 w-7 text-primary-foreground/80"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Badge variant="secondary" className="py-1 px-3 text-xs bg-primary-foreground/20 text-primary-foreground">
                      <Shield className="mr-1 h-4 w-4"/> Garantia 7 dias
                  </Badge>
                  <Badge variant="secondary" className="py-1 px-3 text-xs bg-primary-foreground/20 text-primary-foreground">
                      <LockKeyholeIcon className="mr-1 h-4 w-4"/> Pagamento Seguro
                  </Badge>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Link href="https://pay.kirvano.com/d97db0df-9bb9-4183-a0d6-23a538c79338" target="_blank" className="text-sm text-muted-foreground hover:text-primary underline">
              Não, eu realmente quero o plano básico por R$9,90 e perder a oferta.
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
