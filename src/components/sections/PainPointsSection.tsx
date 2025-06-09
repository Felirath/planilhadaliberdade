import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, TrendingDown, FileWarning, DollarSign } from 'lucide-react';

const painPoints = [
  {
    icon: <TrendingDown className="h-10 w-10 text-primary" />,
    title: "Contas no Vermelho?",
    description: "Cansado de ver o dinheiro sumir antes do fim do mês sem saber para onde foi?"
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-primary" />,
    title: "Dívidas Acumulando?",
    description: "As dívidas parecem uma bola de neve e você não sabe por onde começar a quitá-las?"
  },
  {
    icon: <FileWarning className="h-10 w-10 text-primary" />,
    title: "Desorganização Financeira?",
    description: "Perdido em meio a papéis, planilhas confusas e aplicativos complicados?"
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Sonhos Adiados?",
    description: "Sente que seus objetivos financeiros estão cada vez mais distantes por falta de planejamento?"
  }
];

export default function PainPointsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary-foreground">
          Você se Identifica com Algum Desses Desafios?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  {point.icon}
                </div>
                <CardTitle className="font-headline text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
