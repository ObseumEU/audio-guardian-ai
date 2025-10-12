import { Zap, Target, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Risk Mitigation",
    description: "Prevent costly lawsuits and regulatory fines by proactively identifying copyright violations before they become legal issues.",
  },
  {
    icon: Zap,
    title: "Save Time & Resources",
    description: "Eliminate manual content reviews and free your team to focus on core business activities while maintaining full compliance.",
  },
  {
    icon: Shield,
    title: "Complete Protection",
    description: "Comprehensive coverage across all your digital assets with automatic reporting to authorities—ensuring you're always compliant.",
  },
  {
    icon: TrendingUp,
    title: "Business Continuity",
    description: "Avoid content takedowns, platform penalties, and reputation damage that can disrupt your operations and revenue.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-primary">Corporates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for scale, designed for reliability, optimized for your workflow
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
