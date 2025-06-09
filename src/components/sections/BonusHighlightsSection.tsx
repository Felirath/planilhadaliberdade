import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Gift, Star, Zap, Award } from 'lucide-react';

const bonuses = [
  {
    icon: <Gift className="h-8 w-8 text-accent" />,
    title: "Guia de Investimentos",
    description: "Um e-book exclusivo para iniciantes começarem a investir com segurança."
  },
  {
    icon: <Star className="h-8 w-8 text-accent" />,
    title: "Planilha de Metas Avançada",
    description: "Uma ferramenta extra para traçar e acompanhar seus objetivos de longo prazo."
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Acesso VIP à Comunidade",
    description: "Participe de um grupo exclusivo para trocar dicas e experiências."
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Suporte Prioritário",
    description: "Tenha suas dúvidas respondidas mais rapidamente por nossa equipe especializada."
  }
];

export default function BonusHighlightsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground">
            Turbine Seus Resultados com Bônus Incríveis!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Ao adquirir o Plano Premium, você leva esses presentes exclusivos:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up bg-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-accent/10 mb-3 inline-block">
                 {bonus.icon}
                </div>
                <CardTitle className="font-headline text-xl text-card-foreground">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-card-foreground/80">{bonus.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
