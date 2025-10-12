import { Clock, Database, CheckCircle2, Trash2, Globe, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturesProps {
  id?: string;
}

export const Features = ({ id }: FeaturesProps) => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Clock,
      title: t.features.feature1Title,
      description: t.features.feature1Desc,
    },
    {
      icon: Database,
      title: t.features.feature2Title,
      description: t.features.feature2Desc,
    },
    {
      icon: CheckCircle2,
      title: t.features.feature3Title,
      description: t.features.feature3Desc,
    },
    {
      icon: Globe,
      title: t.features.feature4Title,
      description: t.features.feature4Desc,
    },
    {
      icon: Trash2,
      title: t.features.feature5Title,
      description: t.features.feature5Desc,
    },
    {
      icon: BarChart3,
      title: t.features.feature6Title,
      description: t.features.feature6Desc,
    },
  ];

  return (
    <section id={id} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.features.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 space-y-4 group hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
