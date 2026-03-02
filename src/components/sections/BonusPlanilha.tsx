
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Archive, BookOpen, Zap, Users, HeartHandshake, TrendingUp, Star, Clock, Headphones, LineChart } from 'lucide-react';

const bonuses = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "ACESSO VITALÍCIO",
    description: "Pague uma única vez e tenha acesso para sempre, sem mensalidades ou renovações."
  },
  {
    icon: <Headphones className="h-8 w-8 text-primary" />,
    title: "SUPORTE ESPECIALIZADO",
    description: "Nossa equipe está pronta para tirar todas as suas dúvidas e te ajudar no que for preciso."
  },
  {
    icon: <Archive className="h-8 w-8 text-primary" />,
    title: "TODAS AS NOSSAS VERSÕES",
    description: "Todas as versões anteriores e futuras da Planilha da Liberdade."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "TUTORIAL DE COMO USAR A PLANILHA",
    description: "Tutorial passo a passo de como utilizar a planilha."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "GUIA: COMO NÃO DESISTIR NO PRIMEIRO MÊS",
    description: "Técnicas práticas para criar o hábito de controle financeiro e superar a fase mais difícil."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "GUIA DE HÁBITOS QUE TE AFUNDAM",
    description: "Descubra os comportamentos que drenam seu dinheiro e aprenda a eliminá-los."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "GUIA: ECONOMIZAR GANHANDO POUCO",
    description: "Estratégias realistas para fazer o dinheiro render mesmo com salário apertado."
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "GUIA: AÇÕES SECRETAS PARA 2026",
    description: "Seu guia definitivo de ações secretas supervalorizadas que vão explodir em 2026."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "GUIA: MÉTODO ADEUS DÍVIDAS",
    description: "O passo a passo comprovado para sair das dívidas e construir patrimônio."
  }
];

export default function BonusPlanilha() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <Star className="h-10 w-10 text-accent fill-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-gagalin text-secondary-foreground uppercase">
            VOCÊ AINDA RECEBE 9 BÔNUS <span className="font-bold text-gradient-gold">EXCLUSIVOS</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <Card 
              key={index} 
              className="shadow-xl group hover:scale-105 transform transition-all duration-300 ease-in-out animate-fade-in-up bg-card text-card-foreground border border-border hover:border-primary/50" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="items-center text-center">
                <div className="p-4 rounded-full bg-primary/20 mb-4 inline-block group-hover:animate-pulse-subtle">
                 {bonus.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{bonus.title}</CardTitle>
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
