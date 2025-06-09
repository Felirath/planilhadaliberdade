
import React from 'react';
import Image from 'next/image';
import { Lightbulb, BarChartBig, SmilePlus, BrainCircuit } from 'lucide-react';

const benefits = [
  { text: "Calcula automaticamente o que entra e o que sai", icon: <Lightbulb className="h-6 w-6 mr-3 text-primary flex-shrink-0 animate-scale-in-fade-in" /> },
  { text: "Mostra onde você está gastando sem perceber", icon: <BarChartBig className="h-6 w-6 mr-3 text-primary flex-shrink-0 animate-scale-in-fade-in" /> },
  { text: "Tira a ansiedade e traz clareza", icon: <SmilePlus className="h-6 w-6 mr-3 text-primary flex-shrink-0 animate-scale-in-fade-in" /> },
  { text: "Feita com base em princípios de psicologia financeira", icon: <BrainCircuit className="h-6 w-6 mr-3 text-primary flex-shrink-0 animate-scale-in-fade-in" /> }
];

export default function SolucaoPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in-up group" style={{ animationDelay: '0.4s' }}>
          <div className="rounded-lg shadow-2xl overflow-hidden border-4 border-primary/30 group-hover:scale-105 transform transition-transform duration-300">
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
        <div className="order-1 md:order-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">
            Conheça a <span className="text-primary">Planilha Liberdade</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Uma ferramenta simples e poderosa para quem está afogado em dívidas ou <strong className="text-primary font-bold">quer recuperar o controle da própria vida financeira.</strong>
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center font-body text-muted-foreground animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                {React.cloneElement(benefit.icon, { style: { animationDelay: `${0.5 + index * 0.1}s` }})}
                {benefit.text}
              </li>
            ))}
          </ul>
          <div 
            className="p-1 bg-gradient-green rounded-xl shadow-2xl neon-border-primary animate-fade-in-up mt-6" 
            style={{ animationDelay: `${0.5 + benefits.length * 0.1}s` }}
          >
            <p className="text-xl font-bold text-foreground text-center bg-card p-4 rounded-lg">
              🧠 Mesmo que você nunca tenha usado uma planilha na vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
