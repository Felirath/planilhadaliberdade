import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Para quem é esta planilha?",
    answer: "Esta planilha é ideal para qualquer pessoa que deseja organizar suas finanças pessoais, desde iniciantes até aqueles com algum conhecimento financeiro, mas que buscam uma ferramenta mais prática e eficiente."
  },
  {
    question: "Preciso ter conhecimento avançado em Excel ou Google Sheets?",
    answer: "Não! Nossa planilha é projetada para ser intuitiva e fácil de usar. Fornecemos instruções claras e, se precisar, nosso suporte está à disposição para ajudar."
  },
  {
    question: "A planilha é compatível com Google Sheets e Excel?",
    answer: "Sim, a planilha é compatível com ambas as plataformas. Você receberá versões para Google Sheets (online) e Microsoft Excel (desktop)."
  },
  {
    question: "O pagamento é único ou mensalidade?",
    answer: "O pagamento é único. Você paga uma vez e tem acesso vitalício à planilha e a todas as atualizações futuras do plano adquirido."
  },
  {
    question: "E se eu tiver dificuldades ou dúvidas?",
    answer: "Oferecemos suporte dedicado para todos os nossos clientes. O Plano Premium conta com suporte prioritário para respostas ainda mais rápidas."
  }
];

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline text-primary">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Ainda tem dúvidas? Encontre as respostas aqui.
          </p>
        </div>
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-sm rounded-lg mb-3 px-2">
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline focus:no-underline px-4 py-4">
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
