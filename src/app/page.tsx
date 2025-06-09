import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import SolutionSection from '@/components/sections/SolutionSection';
import BonusHighlightsSection from '@/components/sections/BonusHighlightsSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import PricingOptionsSection from '@/components/sections/PricingOptionsSection';
import FaqSection from '@/components/sections/FaqSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <BonusHighlightsSection />
        <SocialProofSection />
        <PricingOptionsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
