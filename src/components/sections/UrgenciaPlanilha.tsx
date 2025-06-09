
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, LockKeyholeIcon, Hand, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BlueCardIconSmall = () => (
    <svg width="24" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <rect width="38" height="24" rx="3" fill="#2563eb"/>
      <rect x="4" y="16" width="10" height="3" rx="1" fill="white" fillOpacity="0.7"/>
      <rect x="4" y="5" width="6" height="4" rx="1" fill="white" fillOpacity="0.5"/>
    </svg>
  );
  
const RedCardIconSmall = () => (
    <svg width="24" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <rect width="38" height="24" rx="3" fill="#dc2626"/>
      <rect x="4" y="16" width="10" height="3" rx="1" fill="white" fillOpacity="0.7"/>
      <rect x="4" y="5" width="6" height="4" rx="1" fill="white" fillOpacity="0.5"/>
    </svg>
  );


export default function UrgenciaPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-destructive text-destructive-foreground">
      <div className="container mx-auto px-6 md:px-10 text-center">
        
        <div className="bg-destructive-foreground/5 text-destructive-foreground p-4 md:p-6 rounded-lg shadow-md mb-8 max-w-xl w-full mx-auto text-center animate-fade-in-up">
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
            R$ 19,90
          </p>
          <Badge variant="default" className="text-sm py-1.5 px-4 bg-yellow-400 text-yellow-900 font-semibold shadow-md block w-fit mx-auto mt-2 mb-6 rounded-full">
            ECONOMIA DE R$ 50,00
          </Badge>
        
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
        
        <div className="flex justify-center items-center space-x-3 mb-4 animate-fade-in-up w-full" style={{animationDelay: '0.3s'}}>
            <BlueCardIconSmall />
            <RedCardIconSmall />
            <span className="text-sm font-semibold text-muted-foreground">PIX</span>
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
