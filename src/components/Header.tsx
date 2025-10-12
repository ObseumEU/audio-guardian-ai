import { Button } from "@/components/ui/button";
import { Disc3 } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Disc3 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">RightsGuard</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.features}
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.howItWorks}
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.contact}
            </a>
            <LanguageSwitcher />
            <Button variant="hero">
              {t.hero.requestDemo}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
