import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Zap } from 'lucide-react';

const plans = [
  {
    name: "Plano Básico",
    price: "R$47",
    paymentType: "/pagamento único",
    description: "Ideal para quem quer começar a organizar as finanças de forma simples e eficaz.",
    features: [
      "Planilha de Controle Financeiro Essencial",
      "Dashboard Simplificado",
      "Suporte via E-mail"
    ],
    ctaText: "Quero o Plano Básico",
    isPremium: false,
  },
  {
    name: "Plano Premium",
    price: "R$97",
    paymentType: "/pagamento único",
    description: "A solução completa com todos os recursos e bônus exclusivos para máxima performance.",
    features: [
      "Tudo do Plano Básico",
      "Planilha de Metas Avançada",
      "Guia de Investimentos para Iniciantes",
      "Acesso VIP à Comunidade",
      "Suporte Prioritário"
    ],
    ctaText: "Quero o Plano Premium",
    isPremium: true,
    badgeText: "Oferta Limitada!"
  }
];

export default function PricingOptionsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary-foreground">
          Escolha o Plano Ideal para Você
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up ${plan.isPremium ? 'border-primary border-2 scale-105 bg-card' : 'bg-card'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.isPremium && plan.badgeText && (
                <Badge variant="default" className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-sm py-1 px-3 shadow-md">
                  <Zap className="mr-1 h-4 w-4" /> {plan.badgeText}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className={`font-headline text-2xl ${plan.isPremium ? 'text-primary' : 'text-card-foreground'}`}>{plan.name}</CardTitle>
                <CardDescription className="font-body text-card-foreground/80">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${plan.isPremium ? 'text-primary' : 'text-card-foreground'}`}>{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.paymentType}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center font-body text-card-foreground/90">
                      <CheckCircle2 className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.isPremium ? 'text-primary' : 'text-green-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className={`w-full shadow-md text-lg ${plan.isPremium ? 'bg-gradient-to-r from-primary to-[hsl(149,68%,50%)] hover:opacity-90 text-primary-foreground' : 'bg-gradient-to-r from-accent to-[hsl(39,100%,60%)] hover:opacity-90 text-accent-foreground'}`}>
                  {plan.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
