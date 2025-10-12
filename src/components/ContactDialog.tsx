import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type?: "demo" | "call";
}

export const ContactDialog = ({ open, onOpenChange, type = "demo" }: ContactDialogProps) => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? "Request Sent!" : "Žádost odeslána!",
      description: language === 'en' 
        ? "We'll get back to you as soon as possible." 
        : "Ozveme se vám co nejdříve.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
    onOpenChange(false);
  };

  const title = type === "demo" 
    ? (language === 'en' ? "Request a Demo" : "Požádat o demo")
    : (language === 'en' ? "Schedule a Call" : "Naplánovat hovor");

  const description = language === 'en'
    ? "Fill out the form below and we'll contact you shortly."
    : "Vyplňte formulář níže a my se vám brzy ozveme.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              {language === 'en' ? "Name" : "Jméno"} *
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={language === 'en' ? "John Doe" : "Jan Novák"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              {language === 'en' ? "Email" : "E-mail"} *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={language === 'en' ? "john@example.com" : "jan@example.cz"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">
              {language === 'en' ? "Company" : "Společnost"}
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder={language === 'en' ? "Your Company" : "Vaše společnost"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">
              {language === 'en' ? "Message" : "Zpráva"}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={language === 'en' 
                ? "Tell us about your needs..." 
                : "Řekněte nám o vašich potřebách..."}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full" variant="hero">
            {language === 'en' ? "Send Request" : "Odeslat žádost"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
