
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, LockKeyholeIcon, Hand, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const VisaIconSmall = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 38 24" className="h-6 w-auto">
      <rect width="38" height="24" rx="3" fill="#1a1f71"/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VISA</text>
    </svg>
  );
  
const MastercardIconSmall = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 38 24" className="h-6 w-auto">
      <rect width="38" height="24" rx="3" fill="#EB001B"/>
      <circle cx="13" cy="12" r="5" fill="#F79E1B"/>
      <circle cx="25" cy="12" r="5" fill="#FF5F00" opacity="0.8"/>
    </svg>
  );


export default function UrgenciaPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-destructive text-destructive-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        
        <div className="bg-destructive-foreground/5 text-destructive-foreground p-4 md:p-6 rounded-lg shadow-md mb-8 max-w-xl w-full text-center animate-fade-in-up">
          <AlertTriangle className="h-10 w-10 md:h-12 md:w-12 mx-auto text-yellow-300 mb-3 animate-pulse" style={{animationDuration: '1.2s'}} />
          <h2 className="text-xl md:text-2xl font-bold mb-1">
            Atenção: valor promocional por tempo limitado
          </h2>
          <p className="text-sm md:text-base text-destructive-foreground/80">
            Pode subir a qualquer momento. Não perca essa chance!
          </p>
        </div>

        <div className="bg-card text-card-foreground p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto animate-fade-in-up mb-8" style={{animationDelay: '0.1s'}}>
          <p className="text-md text-muted-foreground text-center">
            DE: <span className="line-through">R$ 69,90</span>
          </p>
          <p className="text-5xl font-bold text-primary text-center my-1 animate-pulse-subtle" style={{animationDelay: '0.2s'}}>
            R$ 19,90 {/* Reverted: "PARA:" removed */}
          </p>
          <Badge variant="default" className="text-sm py-1.5 px-4 bg-yellow-400 text-yellow-900 font-semibold shadow-md block w-fit mx-auto mt-2 mb-6">
            ECONOMIA DE R$ 50,00
          </Badge>
        
          <Button 
            size="lg" 
            className="w-full text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg mb-6 animate-fade-in-up rounded-lg h-14" // Reverted to green button
            style={{animationDelay: '0.2s'}}
            asChild
          >
            <Link href="https://pay.kirvano.com/1ecb39db-6543-4625-aa73-e08c93dceec7" target="_blank">
              <Hand className="mr-2 h-6 w-6 transform -scale-x-100" /> QUERO AGORA! <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        

        <div className="flex justify-center items-center space-x-3 mb-4 animate-fade-in-up w-full" style={{animationDelay: '0.3s'}}>
            <VisaIconSmall />
            <MastercardIconSmall />
            {/* PIX text removed, as it was part of the change being reverted */}
            <span className="text-sm font-semibold text-muted-foreground">PIX</span> {/* This was the PIX representation before specific text */}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3 animate-fade-in-up w-full" style={{animationDelay: '0.4s'}}>
            {/* Reverted badge styles */}
            <Badge variant="outline" className="py-1 px-3 text-xs bg-destructive-foreground/10 text-destructive-foreground/80 border-destructive-foreground/30">
                <Shield className="mr-1 h-4 w-4"/> Garantia 7 dias
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs bg-destructive-foreground/10 text-destructive-foreground/80 border-destructive-foreground/30">
                <LockKeyholeIcon className="mr-1 h-4 w-4"/> Pagamento Seguro
            </Badge>
        </div>
        </div>
      </div>
    </section>
  );
}
