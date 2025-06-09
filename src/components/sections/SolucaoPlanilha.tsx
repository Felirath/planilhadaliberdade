import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Calcula automaticamente o que entra e o que sai",
  "Mostra onde você está gastando sem perceber",
  "Tira a ansiedade e traz clareza",
  "Feita com base em princípios de psicologia financeira"
];

export default function SolucaoPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-lg shadow-2xl overflow-hidden border-4 border-primary/30">
            <Image
              src="https://sua-melhor-versao.com/imagens/foto.png"
              alt="Planilha Liberdade em Ação"
              width={500}
              height={350}
              layout="responsive"
              className="rounded-md"
              data-ai-hint="spreadsheet interface"
            />
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">
            Conheça a <span className="text-primary">Planilha Liberdade</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Uma ferramenta simples e poderosa para quem está afogado em dívidas ou quer recuperar o controle da própria vida financeira.
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center font-body text-muted-foreground">
                <CheckCircle2 className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold text-primary bg-primary/10 p-4 rounded-lg shadow-md">
            🧠 Mesmo que você nunca tenha usado uma planilha na vida.
          </p>
        </div>
      </div>
    </section>
  );
}
