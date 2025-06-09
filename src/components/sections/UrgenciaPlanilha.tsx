
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, LockKeyholeIcon, Hand } from 'lucide-react';
import Link from 'next/link';

const VisaIconSmall = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="38" height="24" rx="3" fill="#1a1f71"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">VISA</text>
  </svg>
);

const MastercardIconSmall = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="38" height="24" rx="3" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
    <circle cx="13" cy="12" r="5" fill="#ea001b"/>
    <circle cx="25" cy="12" r="5" fill="#ff5f00"/>
    <path d="M19 12 A5 5 0 0 0 19 12 A5 5 0 0 1 19 12" fill="#f79e1b" />
  </svg>
);

const GenericCardIconSmall = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-destructive-foreground">
        <rect x="1" y="5" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2"/>
    </svg>
);


export default function UrgenciaPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-destructive text-destructive-foreground">
      <div className="container mx-auto px-6 md:px-10 flex flex-col items-center">
        
        <div className="bg-destructive-foreground/5 text-destructive-foreground p-4 md:p-6 rounded-lg shadow-md mb-8 max-w-xl w-full text-center animate-fade-in-up">
          <AlertTriangle className="h-8 w-8 md:h-10 md:w-10 mx-auto text-yellow-300 mb-3" />
          <h2 className="text-xl md:text-2xl font-bold mb-1">
            Atenção: valor promocional por tempo limitado
          </h2>
          <p className="text-sm md:text-base text-destructive-foreground/80">
            Pode subir a qualquer momento.
          </p>
        </div>

        <div className="bg-card text-card-foreground p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto animate-fade-in-up mb-8" style={{animationDelay: '0.1s'}}>
          <p className="text-md text-muted-foreground text-center line-through">
            DE: R$ 69,90
          </p>
          <p className="text-5xl font-bold text-primary text-center my-1">
            PARA: R$ 19,90
          </p>
          <Badge variant="default" className="text-sm py-1.5 px-4 bg-yellow-400 text-yellow-900 font-semibold shadow-md block w-fit mx-auto mt-2 mb-6">
            ECONOMIA DE R$ 50,00
          </Badge>
        
          <Button 
            size="lg" 
            className="w-full text-xl font-bold bg-teal-500 hover:bg-teal-600 text-white shadow-lg animate-fade-in-up rounded-lg h-14"
            style={{animationDelay: '0.2s'}}
            asChild
          >
            <Link href="https://pay.kirvano.com/1ecb39db-6543-4625-aa73-e08c93dceec7" target="_blank">
              <Hand className="mr-2 h-6 w-6 transform -scale-x-100" /> QUERO AGORA!
            </Link>
          </Button>
        </div>

        <div className="flex justify-center items-center space-x-3 mb-4 animate-fade-in-up w-full max-w-md mx-auto" style={{animationDelay: '0.3s'}}>
            <VisaIconSmall />
            <MastercardIconSmall />
            <GenericCardIconSmall />
            <span className="text-sm font-semibold text-destructive-foreground">PIX</span>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3 animate-fade-in-up w-full max-w-md mx-auto" style={{animationDelay: '0.4s'}}>
            <Badge variant="default" className="py-2 px-4 text-xs bg-red-400 hover:bg-red-500 text-white border-red-500">
                <Shield className="mr-1.5 h-4 w-4"/> Garantia 7 dias
            </Badge>
            <Badge variant="default" className="py-2 px-4 text-xs bg-red-400 hover:bg-red-500 text-white border-red-500">
                <LockKeyholeIcon className="mr-1.5 h-4 w-4"/> Pagamento Seguro
            </Badge>
        </div>
      </div>
    </section>
  );
}
