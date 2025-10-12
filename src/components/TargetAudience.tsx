import { Newspaper, Radio, Users, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const audiences = [
  {
    icon: Newspaper,
    title: "Publishers & Newsrooms",
    description: "Distribute video content at scale while maintaining copyright compliance across all platforms.",
  },
  {
    icon: Radio,
    title: "Broadcasters & Streaming",
    description: "Manage rights risk across live and on-demand content with automated pre-publish checks.",
  },
  {
    icon: Users,
    title: "UGC Platforms",
    description: "Screen user-generated content for copyrighted music before it goes live on your platform.",
  },
  {
    icon: Scale,
    title: "Rights & Legal Teams",
    description: "Generate defensible, timestamped evidence for takedowns or revenue sharing negotiations.",
  },
];

export const TargetAudience = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Built For</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by teams who need reliable, scalable copyright detection
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
