
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay to avoid jarring experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const dismissBanner = () => {
    localStorage.setItem('cookieConsent', 'dismissed');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/b1b5c69d-d9d7-440f-9f71-fcee64095f94.png" 
              alt="Mamut" 
              className="h-8 w-auto"
            />
            <div className="flex-1">
              <p className="text-gray-700 text-sm md:text-base">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                <span className="hidden md:inline"> By continuing to use our site, you agree to our use of cookies.</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              onClick={acceptCookies}
              className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-2 text-sm font-medium"
            >
              Accept All
            </Button>
            <button
              onClick={dismissBanner}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
