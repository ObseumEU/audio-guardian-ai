import { Disc3, Music2, MessageSquare, Activity, Container, Eye } from "lucide-react";

const integrations = [
  { icon: Disc3, name: "ACRCloud", category: "Recognition" },
  { icon: Music2, name: "Shazam-based", category: "Recognition" },
  { icon: Music2, name: "Spotify", category: "Verification" },
  { icon: MessageSquare, name: "RabbitMQ", category: "Messaging" },
  { icon: Container, name: ".NET Aspire", category: "Orchestration" },
  { icon: Activity, name: "OpenTelemetry", category: "Observability" },
  { icon: Eye, name: "Sentry", category: "Monitoring" },
];

export const Integrations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Integrations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by industry-leading recognition and infrastructure tools
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <integration.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{integration.name}</div>
                <div className="text-xs text-muted-foreground">{integration.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
