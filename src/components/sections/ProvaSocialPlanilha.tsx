'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';

const testimonialsImages = [
  "https://sua-melhor-versao.com/imagens/wpp1.png",
  "https://sua-melhor-versao.com/imagens/wpp%202.png",
  "https://sua-melhor-versao.com/imagens//insta%202.png",
  "https://sua-melhor-versao.com/imagens/insta%201.png"
];

export default function ProvaSocialPlanilha() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsImages.length) % testimonialsImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto scroll every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-4 text-foreground">
          Mais de <span className="text-primary">3000 pessoas</span> já começaram sua jornada!
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Veja o que nossos clientes estão dizendo sobre os resultados obtidos:
        </p>
        
        <div className="relative max-w-3xl mx-auto animate-fade-in-up">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsImages.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                   <Image
                    src={src}
                    alt={`Testemunho ${index + 1}`}
                    width={700}
                    height={700} 
                    className="object-contain w-full h-auto max-h-[70vh]"
                    data-ai-hint="testimonial social proof"
                  />
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-0 -translate-y-1/2 transform bg-card/70 hover:bg-card text-foreground p-2 rounded-full shadow-md z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-0 -translate-y-1/2 transform bg-card/70 hover:bg-card text-foreground p-2 rounded-full shadow-md z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {testimonialsImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-muted'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
