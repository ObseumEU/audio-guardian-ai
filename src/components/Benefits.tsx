import { Zap, Target, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const Benefits = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Target,
      title: t.benefits.benefit1Title,
      description: t.benefits.benefit1Desc,
    },
    {
      icon: Zap,
      title: t.benefits.benefit2Title,
      description: t.benefits.benefit2Desc,
    },
    {
      icon: Shield,
      title: t.benefits.benefit3Title,
      description: t.benefits.benefit3Desc,
    },
    {
      icon: TrendingUp,
      title: t.benefits.benefit4Title,
      description: t.benefits.benefit4Desc,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.benefits.title} <span className="text-primary">{t.benefits.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
