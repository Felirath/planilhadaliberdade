
'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Gift, CheckCircle2, Shield, LockKeyholeIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
);


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); 

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
              <XCircleIcon /> PARE! NÃO COMETA ESSE ERRO
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
                {["Apenas 2 meses de acesso (depois você perde tudo)", "Sem tutorial para usar a planilha", "Sem os 6 bônus que valem mais de R$ 200", "Você vai ficar perdido sem orientação"].map(item => (
                  <li key={item} className="flex items-start"><XCircleIcon />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-100 border-2 border-green-600 p-6 rounded-lg shadow-lg animate-fade-in-up hover:shadow-xl transition-shadow" style={{animationDelay: '0.6s'}}>
              <h3 className="text-xl font-bold text-green-700 mb-3">PORQUE VOCÊ DEVE ESCOLHER O PLANO PREMIUM:</h3>
              <ul className="space-y-2 text-green-600">
                {["Acesso VITALÍCIO", "Tutorial completo com direcionamento", "6 bônus exclusivos", "R$ 54,00 de economia"].map(item => (
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
              <p className="text-xl md:text-2xl font-bold text-primary-foreground/90 mt-2">AGORA:</p>
              <p className="text-5xl font-bold my-1 text-yellow-300">R$ 15,90</p>
              <Button 
                size="lg" 
                className="w-full text-xl font-bold bg-gradient-yellow hover:opacity-90 text-black shadow-lg mt-6 mb-4"
                asChild
              >
                <Link href="https://lastlink.com/p/C6F47B2D1/checkout-payment/" target="_blank">
                  Obter Agora <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>

              <div className="flex justify-center items-center space-x-2 mb-3">
                  <VisaIcon />
                  <MastercardIcon />
                  <GenericCardIcon />
                  <PixTextIcon />
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
            <Link href="https://lastlink.com/p/CDDBBE2A1/checkout-payment/" target="_blank" className="text-sm text-muted-foreground hover:text-primary underline">
              Não, eu realmente quero o plano básico por R$9,90 e perder a oferta.
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
