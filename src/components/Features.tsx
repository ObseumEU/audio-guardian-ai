import { Clock, Database, CheckCircle2, Trash2, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Timestamped Detections",
    description: "Per-track confidence scores and exact duration mapping for every match",
  },
  {
    icon: Database,
    title: "Metadata Consolidation",
    description: "Label, artist, and track data verified across Spotify and Deezer",
  },
  {
    icon: CheckCircle2,
    title: "Intelligent Fallback",
    description: "Automatic secondary engine when primary recognition is uncertain",
  },
  {
    icon: Globe,
    title: "Auto-Report to Authorities",
    description: "Automatically submit copyright violation reports to rights authorities and enforcement agencies with timestamped evidence",
  },
  {
    icon: Trash2,
    title: "Storage Hygiene",
    description: "Built-in garbage collection to manage disk space automatically",
  },
  {
    icon: BarChart3,
    title: "Full Observability",
    description: "OpenTelemetry integration with Sentry and health endpoints",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for enterprise-grade copyright compliance
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
