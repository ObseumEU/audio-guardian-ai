import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TargetAudience } from "@/components/TargetAudience";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Features />
        <TargetAudience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
