import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Obseum</h3>
            <p className="text-muted-foreground">
              Váš strategický technologický partner pro podnikovou digitální transformaci a inovační excelenci.
            </p>
          </div>

          {/* Solutions Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Řešení</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Vývoj Vlastního Softwaru</li>
              <li>AI & Strojové Učení</li>
              <li>Kybernetická Bezpečnost & Penetrační Testování</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-muted-foreground">
              <a 
                href="mailto:info@obseum.cz" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@obseum.cz
              </a>
              <a 
                href="tel:+420724676829" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +420 724 676 829
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 Obseum. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
};
