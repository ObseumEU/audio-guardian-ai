import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t.cta.title}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg">
              <Mail className="mr-2" />
              {t.cta.requestDemo}
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              {t.cta.scheduleCall}
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground">
            <p>{t.cta.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
