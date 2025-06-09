
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, LockKeyholeIcon, Hand, ArrowRight } from 'lucide-react';
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


export default function UrgenciaPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-destructive text-destructive-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        
        <div className="max-w-xl mx-auto bg-card/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl animate-fade-in-up border border-destructive-foreground/20 mb-8">
          <AlertTriangle className="h-16 w-16 mx-auto text-yellow-300 mb-4 animate-pulse" style={{animationDuration: '1.2s'}} />
          <h2 className="text-2xl md:text-3xl font-headline text-destructive-foreground mb-2">
            🚨 Atenção: Valor Promocional Por Tempo Limitado!
          </h2>
          <p className="text-destructive-foreground/80 mb-6">
            Pode subir a qualquer momento. Não perca essa chance!
          </p>
        
          <div className="my-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <p className="text-lg text-destructive-foreground/70">
              DE: <span className="line-through">R$ 69,90</span>
            </p>
            <p className="text-5xl font-bold text-yellow-300 my-1 animate-pulse-subtle" style={{animationDelay: '0.2s'}}>
              R$ 19,90
            </p>
            <Badge variant="default" className="text-sm py-1.5 px-4 bg-yellow-400 text-yellow-900 font-semibold shadow-md mt-2">
              ECONOMIA DE R$ 50,00
            </Badge>
          </div>
        
          <Button 
            size="lg" 
            className="w-full text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg mb-6 animate-fade-in-up rounded-lg h-14"
            style={{animationDelay: '0.2s'}}
            asChild
          >
            <Link href="https://pay.kirvano.com/1ecb39db-6543-4625-aa73-e08c93dceec7" target="_blank">
              <Hand className="mr-2 h-6 w-6 transform -scale-x-100" /> QUERO AGORA! <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        
        <div className="flex justify-center items-center space-x-2 mb-4 animate-fade-in-up w-full" style={{animationDelay: '0.3s'}}>
            <VisaIcon />
            <MastercardIcon />
            <GenericCardIcon />
            <PixTextIcon />
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3 animate-fade-in-up w-full" style={{animationDelay: '0.4s'}}>
            <Badge variant="outline" className="py-1 px-3 text-xs bg-muted text-muted-foreground border-border">
                <Shield className="mr-1 h-4 w-4 text-muted-foreground"/> Garantia 7 dias
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs bg-muted text-muted-foreground border-border">
                <LockKeyholeIcon className="mr-1 h-4 w-4 text-muted-foreground"/> Pagamento Seguro
            </Badge>
        </div>
        </div>
      </div>
    </section>
  );
}

