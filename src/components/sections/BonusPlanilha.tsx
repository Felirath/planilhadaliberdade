import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Zap, Users, HeartHandshake, TrendingUp } from 'lucide-react';

const bonuses = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Tutorial de Como Usar a Planilha",
    description: "Tutorial passo a passo de como utilizar a planilha."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Guia: Como Não Desistir no Primeiro Mês",
    description: "Técnicas práticas para criar o hábito de controle financeiro e superar a fase mais difícil."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "10 Hábitos Que Afundam Suas Finanças",
    description: "Descubra os comportamentos que drenam seu dinheiro e aprenda a eliminá-los."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Guia Rápido: Economizar Ganhando Pouco",
    description: "Estratégias realistas para fazer o dinheiro render mesmo com salário apertado."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Método Adeus Dívidas",
    description: "O passo a passo comprovado para sair das dívidas e construir patrimônio."
  }
];

export default function BonusPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline text-secondary-foreground">
            Você Ainda Recebe <span className="text-primary">5 Bônus Exclusivos</span>:
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up bg-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4 inline-block">
                 {bonus.icon}
                </div>
                <CardTitle className="font-headline text-xl text-card-foreground">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-muted-foreground">{bonus.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
