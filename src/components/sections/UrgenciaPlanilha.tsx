
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, LockKeyholeIcon, Hand, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Using the globally defined icons from HeroSectionPlanilha for consistency
const VisaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="38" height="24" rx="3" fill="#0057A0"/> {/* Blue for Visa */}
    <rect x="4" y="16" width="10" height="3" rx="1" fill="white" fillOpacity="0.7"/>
    <rect x="4" y="5" width="6" height="4" rx="1" fill="white" fillOpacity="0.5"/>
  </svg>
);

const MastercardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="38" height="24" rx="3" fill="#EB001B"/> {/* Red for Mastercard */}
    <circle cx="10" cy="12" r="5" fill="#F79E1B"/>
    <circle cx="19" cy="12" r="5" fill="#FF5F00" opacity="0.8"/>
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
          className="max-w-md mx-auto bg-destructive-foreground/5 p-6 rounded-xl shadow-lg animate-fade-in-up mb-8 border border-destructive-foreground/20"
          style={{animationDelay: '0.1s'}}
        >
          <AlertTriangle className="h-12 w-12 mx-auto text-yellow-300 mb-3" />
          <h2 className="text-xl md:text-2xl font-bold text-destructive-foreground mb-1">
            Atenção: valor promocional por tempo limitado
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
          <p className="text-sm text-muted-foreground text-center">DE: R$ 69,90</p>
          <p className="text-5xl font-bold text-primary text-center my-2">R$ 19,90</p>
          
          <div className="text-center my-4">
            <Badge variant="default" className="text-xs py-1.5 px-4 bg-yellow-400 text-yellow-900 font-semibold shadow-md rounded-full">
              ECONOMIA DE R$ 50,00
            </Badge>
          </div>
        
          <Button 
            size="lg" 
            className="w-full text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg mb-6 animate-fade-in-up rounded-lg h-12"
            asChild
          >
            <Link href="https://pay.kirvano.com/1ecb39db-6543-4625-aa73-e08c93dceec7" target="_blank">
              <Hand className="mr-2 h-5 w-5 transform -scale-x-100" /> QUERO AGORA! <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        
          <div className="flex justify-center items-center space-x-3 mb-4 animate-fade-in-up w-full">
            <VisaIcon />
            <MastercardIcon />
            <PixTextIcon />
          </div>

          <div className="flex flex-col items-center space-y-2 animate-fade-in-up w-full">
            <Badge variant="outline" className="py-1.5 px-4 text-xs bg-muted text-muted-foreground border-border rounded-full w-4/5 sm:w-auto justify-center">
                <Shield className="mr-1.5 h-4 w-4"/> Garantia 7 dias
            </Badge>
            <Badge variant="outline" className="py-1.5 px-4 text-xs bg-muted text-muted-foreground border-border rounded-full w-4/5 sm:w-auto justify-center">
                <LockKeyholeIcon className="mr-1.5 h-4 w-4"/> Pagamento Seguro
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
