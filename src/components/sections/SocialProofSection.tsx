import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    avatarFallback: "AS",
    avatarImage: "https://placehold.co/80x80.png",
    dataAiHint: "woman avatar",
    testimonial: "Essa planilha mudou minha vida! Finalmente consegui organizar minhas finanças e sair do vermelho. Super recomendo!",
    rating: 5,
  },
  {
    name: "Carlos Pereira",
    avatarFallback: "CP",
    avatarImage: "https://placehold.co/80x80.png",
    dataAiHint: "man avatar",
    testimonial: "Simples, intuitiva e poderosa. O acompanhamento de gastos ficou muito mais fácil. Vale cada centavo!",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    avatarFallback: "MC",
    avatarImage: "https://placehold.co/80x80.png",
    dataAiHint: "person avatar",
    testimonial: "Os bônus do plano premium são fantásticos! O guia de investimentos me ajudou muito a começar. Estou amando!",
    rating: 4,
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up bg-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
                  <div className="flex mt-1">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                    ))}
                    {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                       <Star key={i} className="h-4 w-4 text-accent" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground font-body italic">"{testimonial.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
