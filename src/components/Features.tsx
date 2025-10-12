import { Clock, Database, CheckCircle2, Trash2, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Reduce Legal Exposure",
    description: "Identify and address copyright issues before they result in lawsuits, penalties, or cease-and-desist orders",
  },
  {
    icon: Database,
    title: "Protect Your Reputation",
    description: "Maintain your brand integrity by ensuring all published content is fully compliant with copyright laws",
  },
  {
    icon: CheckCircle2,
    title: "Cost Savings",
    description: "Avoid expensive legal fees, settlement costs, and content removal penalties through proactive compliance",
  },
  {
    icon: Globe,
    title: "Regulatory Compliance",
    description: "Automated reporting to authorities ensures you meet all legal requirements across jurisdictions",
  },
  {
    icon: Trash2,
    title: "Peace of Mind",
    description: "Sleep better knowing your entire content library is continuously monitored and compliant",
  },
  {
    icon: BarChart3,
    title: "Executive Insights",
    description: "Clear reporting and dashboards showing your compliance status and risk reduction metrics",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Business Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tangible value for your organization
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
