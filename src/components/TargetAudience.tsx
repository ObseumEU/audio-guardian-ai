import { Newspaper, Radio, Users, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const TargetAudience = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      icon: Newspaper,
      title: t.targetAudience.case1Title,
      description: t.targetAudience.case1Desc,
    },
    {
      icon: Radio,
      title: t.targetAudience.case2Title,
      description: t.targetAudience.case2Desc,
    },
    {
      icon: Users,
      title: t.targetAudience.case3Title,
      description: t.targetAudience.case3Desc,
    },
    {
      icon: Scale,
      title: t.targetAudience.case4Title,
      description: t.targetAudience.case4Desc,
    },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.targetAudience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.targetAudience.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
