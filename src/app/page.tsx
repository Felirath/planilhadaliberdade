import Header from '@/components/layout/Header';
import FooterPlanilha from '@/components/layout/Footer';
import HeroSectionPlanilha from '@/components/sections/HeroSectionPlanilha';
import DoresPlanilha from '@/components/sections/DoresPlanilha';
import SolucaoPlanilha from '@/components/sections/SolucaoPlanilha';
import BonusPlanilha from '@/components/sections/BonusPlanilha';
import ProvaSocialPlanilha from '@/components/sections/ProvaSocialPlanilha';
import OfertaPlanilha from '@/components/sections/OfertaPlanilha';
import GarantiaPlanilha from '@/components/sections/GarantiaPlanilha';
import UrgenciaPlanilha from '@/components/sections/UrgenciaPlanilha';
import FaqPlanilha from '@/components/sections/FaqPlanilha';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSectionPlanilha />
        <DoresPlanilha />
        <SolucaoPlanilha />
        <BonusPlanilha />
        <ProvaSocialPlanilha />
        <OfertaPlanilha />
        <GarantiaPlanilha />
        <UrgenciaPlanilha />
        <FaqPlanilha />
      </main>
      <FooterPlanilha />
    </div>
  );
}
