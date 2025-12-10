import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Calendar } from "lucide-react";
import { useState } from "react";

export const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Calendar,
      label: "Book Call",
      action: () => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank'),
      primary: true
    },
    {
      icon: Mail,
      label: "Email",
      action: () => window.location.href = 'mailto:contact@leadmamut.com',
      primary: false
    },
    {
      icon: MessageCircle,
      label: "Contact Form",
      action: () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
      primary: false
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-2 animate-in slide-in-from-bottom-2 duration-200">
          {contactOptions.map((option, index) => (
            <div
              key={option.label}
              className="flex items-center justify-end space-x-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="bg-background/95 backdrop-blur-sm border border-border px-3 py-1 rounded-lg text-sm font-medium text-foreground shadow-lg">
                {option.label}
              </span>
              <Button
                size="sm"
                variant={option.primary ? "default" : "outline"}
                className={`w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                  option.primary 
                    ? "bg-gradient-primary text-primary-foreground hover:shadow-glow" 
                    : "bg-background/95 backdrop-blur-sm border-border hover:bg-accent"
                }`}
                onClick={() => {
                  option.action();
                  setIsOpen(false);
                }}
              >
                <option.icon className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        size="lg"
        className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen 
            ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" 
            : "bg-gradient-primary text-primary-foreground hover:shadow-glow"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className="text-lg font-bold">×</span>
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};