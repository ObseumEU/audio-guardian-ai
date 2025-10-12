import { Disc3 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Disc3 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">RightsGuard</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2025 RightsGuard. All rights reserved.</p>
            <p className="mt-1">Business copyright protection & compliance</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
