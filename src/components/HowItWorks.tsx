import { Download, Scissors, ScanSearch, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HowItWorksProps {
  id?: string;
}

export const HowItWorks = ({ id }: HowItWorksProps) => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Download,
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      icon: Scissors,
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      icon: ScanSearch,
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
    {
      icon: FileText,
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Desc,
    },
  ];

  return (
    <section id={id} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.howItWorks.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-12 -right-8 w-6 h-6 text-primary/50 z-0" />
                )}
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {t.howItWorks.step1} {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
