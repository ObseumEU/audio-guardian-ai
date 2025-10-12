import { Newspaper, Radio, Users, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const audiences = [
  {
    icon: Newspaper,
    title: "Website Compliance",
    description: "Automatically scan all audio content on your website and ensure full copyright compliance with automated reporting to authorities.",
  },
  {
    icon: Radio,
    title: "Database Auditing",
    description: "Continuously monitor your audio databases for copyrighted content and maintain legal compliance with real-time alerts.",
  },
  {
    icon: Users,
    title: "Corporate Legal Protection",
    description: "Protect your organization from copyright infringement lawsuits with automated detection and authority reporting.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Stay compliant with copyright laws across jurisdictions through automatic submission of findings to regulatory bodies.",
  },
];

export const TargetAudience = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Business Use Cases</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatic copyright compliance across your entire digital infrastructure
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
