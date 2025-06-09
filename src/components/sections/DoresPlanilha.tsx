
import Image from 'next/image';
import { XCircle, AlertTriangle, TrendingDown, Clock, ShieldAlert } from 'lucide-react';

const painPoints = [
  { text: "Você trabalha o mês inteiro, mas o dinheiro desaparece.", icon: <TrendingDown className="h-6 w-6 text-destructive" /> },
  { text: "Toda vez que tenta se organizar, se sente mais perdido ainda.", icon: <AlertTriangle className="h-6 w-6 text-destructive" /> },
  { text: "Vive com medo dos boletos, e sente que nunca vai sair dessa roda de sofrimento.", icon: <Clock className="h-6 w-6 text-destructive" /> },
  { text: "Não consegue guardar nada, e a cada mês sente mais ansiedade e culpa.", icon: <ShieldAlert className="h-6 w-6 text-destructive" /> }
];

export default function DoresPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-6 text-secondary-foreground animate-fade-in-up">
          Você Recebe o Salário, Mas Ele <span className="text-red-500">Some?</span> 😰
        </h2>
        <div className="max-w-lg mx-auto mb-12 rounded-lg shadow-xl overflow-hidden animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
          <Image
            src="https://sua-melhor-versao.com/imagens/homem-preocupado.jpg"
            alt="Homem preocupado com as finanças"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg"
            data-ai-hint="man worried finance"
          />
        </div>
        <ul className="space-y-5 max-w-2xl mx-auto mb-10 text-lg font-body text-secondary-foreground/90">
          {painPoints.map((point, index) => (
            <li 
              key={index} 
              className="p-5 bg-card rounded-xl shadow-lg animate-fade-in-up group hover:shadow-2xl transition-all duration-300 border-l-4 border-destructive/50 hover:border-destructive flex items-start space-x-4" 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                {point.icon}
              </div>
              <span className="flex-grow">{point.text}</span>
            </li>
          ))}
        </ul>
        <div 
          className="text-xl md:text-2xl font-bold text-center bg-primary/10 p-6 rounded-lg shadow-xl animate-fade-in-up border border-primary/30" 
          style={{ animationDelay: `${0.3 + painPoints.length * 0.1}s` }}
        >
          <p className="flex items-center justify-center text-foreground">
            <XCircle className="inline-block h-8 w-8 mr-2 text-red-500 animate-pulse-subtle" />
            Isso não é falta de esforço.
          </p>
          <p className="mt-2">
            <span className="text-yellow-900 bg-yellow-400 px-3 py-1.5 rounded-lg shadow-md inline-block">É falta de CLAREZA.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
