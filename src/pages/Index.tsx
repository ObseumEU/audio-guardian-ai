import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TargetAudience } from "@/components/TargetAudience";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Benefits />
        <HowItWorks id="how-it-works" />
        <Features id="features" />
        <TargetAudience />
        <FAQ />
        <CTA id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
