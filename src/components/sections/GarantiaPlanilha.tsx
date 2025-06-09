import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function GarantiaPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-headline mb-8 text-foreground">
          Garantia de <span className="text-primary">7 Dias</span> – Sem Risco Pra Você!
        </h2>
        <div className="max-w-sm mx-auto mb-10 animate-fade-in-up">
          <Image
            src="https://sua-melhor-versao.com/imagens/selo.png"
            alt="Selo de Garantia 7 Dias"
            width={200}
            height={200}
            className="mx-auto"
            data-ai-hint="guarantee badge"
          />
        </div>
        <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto mb-8 p-6 bg-secondary rounded-lg shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          "Teste a planilha. Se não sentir mais controle e clareza sobre o seu dinheiro, <strong className="text-primary not-italic font-semibold">você recebe 100% do seu dinheiro de volta. Sem perguntas.</strong>"
        </blockquote>
        
        <div className="flex items-center justify-center space-x-2 text-xl font-semibold text-primary animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <ShieldCheck size={32} /> 
          <span>100% Garantido</span>
        </div>
        <p className="text-md text-muted-foreground mt-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Reembolso total em até 7 dias</p>
      </div>
    </section>
  );
}
