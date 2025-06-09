import Image from 'next/image';
import { XCircle } from 'lucide-react';

const painPoints = [
  "Você trabalha o mês inteiro, mas o dinheiro desaparece.",
  "Toda vez que tenta se organizar, se sente mais perdido ainda.",
  "Vive com medo dos boletos, e sente que nunca vai sair dessa roda de sofrimento.",
  "Não consegue guardar nada, e a cada mês sente mais ansiedade e culpa."
];

export default function DoresPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-6 text-secondary-foreground animate-fade-in-up">
          Você Recebe o Salário, Mas Ele <span className="text-red-500">Some?</span> 😰
        </h2>
        <div className="max-w-lg mx-auto mb-12 rounded-lg shadow-xl overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
        <ul className="space-y-4 max-w-2xl mx-auto mb-10 text-lg font-body text-secondary-foreground/90">
          {painPoints.map((point, index) => (
            <li key={index} className="p-4 bg-card rounded-lg shadow-md animate-fade-in-up group hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              {point}
            </li>
          ))}
        </ul>
        <p className="text-xl md:text-2xl font-bold text-center text-primary bg-primary/10 p-4 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${0.3 + painPoints.length * 0.1}s` }}>
          <XCircle className="inline-block h-7 w-7 mr-2 text-red-500 animate-pulse-subtle" /> Isso não é falta de esforço. <span className="text-primary-foreground bg-primary px-1 rounded">É falta de CLAREZA.</span>
        </p>
      </div>
    </section>
  );
}
