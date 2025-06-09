import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Onde receberei meu acesso?",
    answer: "Você receberá o acesso imediatamente via e-mail, após a conclusão do pagamento. Basta verificar sua caixa de entrada ou pasta de spam."
  },
  {
    question: "A planilha funciona em qualquer dispositivo?",
    answer: "Sim! A Planilha Liberdade funciona perfeitamente em computadores, tablets e celulares. Você pode acessar de qualquer lugar e manter seu controle financeiro sempre atualizado."
  },
  {
    question: "Preciso ter conhecimento em Excel ou planilhas?",
    answer: "Não! A planilha foi desenvolvida pensando em pessoas sem experiência. É super intuitiva e fácil de usar, mesmo para quem nunca usou planilhas antes."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "É simples: use a planilha por até 7 dias. Se não sentir mais clareza e controle sobre seu dinheiro, basta solicitar reembolso e devolveremos 100% do valor, sem perguntas."
  },
  {
    question: "Posso usar a planilha em mais de um dispositivo?",
    answer: "Sim! Você pode sincronizar a planilha entre seus dispositivos e acessá-la de qualquer lugar, mantendo seus dados sempre atualizados."
  }
];

export default function FaqPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline text-foreground">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card shadow-sm rounded-lg px-2 border border-border hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-headline text-lg text-card-foreground hover:no-underline focus:no-underline px-4 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 font-body text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
