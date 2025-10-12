import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                AI-Powered Copyright Detection
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Protect Your Business from{" "}
              <span className="text-primary">Copyright Risk</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Eliminate copyright violations across your digital content. Automated detection and regulatory reporting keeps your business compliant and protected from costly legal disputes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Request a Demo
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Detection Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$0</div>
                <div className="text-sm text-muted-foreground">Legal Penalties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl animate-float" />
            <img 
              src={heroImage} 
              alt="Copyright detection visualization" 
              className="relative rounded-3xl shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
