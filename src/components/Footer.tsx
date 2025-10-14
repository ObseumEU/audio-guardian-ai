import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t.footer.brand}</h3>
            <p className="text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Solutions Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.solutionsTitle}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://obseum.cz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {t.footer.solution1}
                </a>
              </li>
              <li>
                <a href="https://obseum.cz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {t.footer.solution2}
                </a>
              </li>
              <li>
                <a href="https://obseum.cz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {t.footer.solution3}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-3 text-muted-foreground">
              <a 
                href={`mailto:${t.footer.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t.footer.email}
              </a>
              <a 
                href={`tel:${t.footer.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t.footer.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
