import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden bg-hero-gradient min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t.hero.title}{" "}
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                {t.hero.requestDemo}
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                {t.hero.viewDocs}
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">{t.hero.stat1Value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat1Label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{t.hero.stat2Value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat2Label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{t.hero.stat3Value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat3Label}</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl animate-float" />
            <img 
              src={heroImage} 
              alt="Copyright detection visualization" 
              className="relative rounded-3xl shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
