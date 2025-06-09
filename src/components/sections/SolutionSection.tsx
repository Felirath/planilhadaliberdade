
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  "Visão clara de suas receitas e despesas.",
  "Controle total sobre seus gastos.",
  "Planejamento eficiente para alcançar metas.",
  "Interface intuitiva e fácil de usar."
];

export default function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="https://sua-melhor-versao.com/imagens/planilha.png"
              alt="Planilha Liberdade Financeira em Ação"
              width={500}
              height={350}
              className="rounded-lg" // layout="responsive" is default with width/height
              data-ai-hint="spreadsheet mockup"
            />
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-primary">
            A Solução Completa para Sua Desorganização Financeira
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Nossa planilha foi cuidadosamente desenhada para ser sua maior aliada na jornada rumo à liberdade financeira. Com ela, você terá:
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center font-body text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
          <Button size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--accent)/0.8)] hover:opacity-90 transition-opacity text-accent-foreground shadow-lg">
            Ver Detalhes da Planilha
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

