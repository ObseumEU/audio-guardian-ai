import { Zap, Target, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Multi-Engine Accuracy",
    description: "Combines ACRCloud + Shazam-based fallback with Spotify verification for higher confidence detections.",
  },
  {
    icon: Zap,
    title: "Fast & Scalable",
    description: "Splits audio into chunks and processes in parallel. Handle thousands of videos without slowdown.",
  },
  {
    icon: Shield,
    title: "Automated Copyright Protection",
    description: "From detection to authority reporting with zero manual steps. Automatically submit copyright findings to rights organizations and enforcement agencies.",
  },
  {
    icon: TrendingUp,
    title: "Production Ready",
    description: "OpenTelemetry metrics, robust retries, and automatic storage garbage collection out-of-the-box.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Teams Choose <span className="text-primary">CopyrightAnalyzer</span>
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
