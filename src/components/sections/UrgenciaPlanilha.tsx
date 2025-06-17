
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, LockKeyholeIcon, ArrowRight } from 'lucide-react';
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
    <span className="text-sm font-semibold text-muted-foreground">PIX</span>
);


export default function UrgenciaPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-destructive text-destructive-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        
        {/* Top Attention Box */}
        <div 
          className="max-w-xl mx-auto bg-destructive-foreground/5 p-6 rounded-xl shadow-lg animate-fade-in-up mb-8 border border-destructive-foreground/20"
          style={{animationDelay: '0.1s'}}
        >
          <AlertTriangle className="h-12 w-12 mx-auto text-yellow-300 mb-3 animate-pulse" style={{animationDuration: '1.2s'}} />
          <h2 className="text-xl md:text-2xl font-bold text-destructive-foreground mb-1">
            Atenção: Valor Promocional Por Tempo Limitado!
          </h2>
          <p className="text-sm text-destructive-foreground/80">
            Pode subir a qualquer momento. Não perca essa chance!
          </p>
        </div>

        {/* Main White Pricing Card */}
        <div 
          className="max-w-sm mx-auto bg-card text-card-foreground p-6 md:p-8 rounded-xl shadow-2xl animate-fade-in-up"
          style={{animationDelay: '0.2s'}}
        >
          <p className="text-sm text-muted-foreground text-center line-through">DE: R$ 69,90</p>
          <p className="text-5xl font-bold text-primary text-center my-2">R$ 19,90</p>
          
          <div className="text-center my-4">
            <Badge variant="default" className="text-sm py-1.5 px-4 bg-yellow-400 text-yellow-900 font-semibold shadow-md rounded-full">
              ECONOMIA DE R$ 50,00
            </Badge>
          </div>
        
          <Button 
            size="lg" 
            className="w-full text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg mb-6 rounded-lg h-12"
            asChild
          >
            <Link href="https://pay.kirvano.com/1ecb39db-6543-4625-aa73-e08c93dceec7" target="_blank">
              👉 QUERO AGORA! <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        
          <div className="flex justify-center items-center space-x-3 mb-4 animate-fade-in-up w-full">
            <VisaIcon />
            <MastercardIcon />
            <GenericCardIcon />
            <PixTextIcon />
          </div>

          <div className="flex flex-col items-center space-y-2 animate-fade-in-up w-full">
            <Badge variant="outline" className="py-1.5 px-4 text-xs bg-muted text-muted-foreground border-border rounded-full w-4/5 sm:w-auto justify-center">
                <Shield className="mr-1.5 h-4 w-4 text-muted-foreground"/> Garantia 7 dias
            </Badge>
            <Badge variant="outline" className="py-1.5 px-4 text-xs bg-muted text-muted-foreground border-border rounded-full w-4/5 sm:w-auto justify-center">
                <LockKeyholeIcon className="mr-1.5 h-4 w-4 text-muted-foreground"/> Pagamento Seguro
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
