import { Button } from "@/components/ui/button";
import { Disc3, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ContactDialog } from "./ContactDialog";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);

  const isHomePage = location.pathname === '/';
  
  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Disc3 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Audexia</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.features}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.howItWorks}
            </button>
            <Link 
              to="/faq" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.faq}
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </button>
            <LanguageSwitcher />
            <Button variant="hero" onClick={() => setShowContactDialog(true)}>
              {t.hero.requestDemo}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('features');
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
              >
                {t.nav.features}
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('how-it-works');
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
              >
                {t.nav.howItWorks}
              </button>
              <Link 
                to="/faq" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.faq}
              </Link>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('contact');
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
              >
                {t.nav.contact}
              </button>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Button variant="hero" className="w-full" onClick={() => {
                setShowContactDialog(true);
                setIsMenuOpen(false);
              }}>
                {t.hero.requestDemo}
              </Button>
            </div>
          </nav>
        )}
      </div>
      <ContactDialog open={showContactDialog} onOpenChange={setShowContactDialog} type="demo" />
    </header>
  );
};
