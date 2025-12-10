import { Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (href.startsWith('#')) {
      if (isHomePage) {
        // On home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Not on home page, navigate to home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-[#374151] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/b1b5c69d-d9d7-440f-9f71-fcee64095f94.png" 
                alt="Mamut" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Not an Agency. Not a Staffing Firm. A Build-Operate-Transfer Partner. One Buyout. Permanent Ownership.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/104098834" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">What's Included</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">BDR Team</a></li>
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Go-to-Market Engineer</a></li>
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">American Copywriter</a></li>
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Tools & Credits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Startups</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Outbound Framework</a></li>
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Team Integration</a></li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleNavClick('#testimonials', e)}
                  className="hover:text-[#FF6B35] transition-colors cursor-pointer"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a 
                  href="#roi-calculator" 
                  onClick={(e) => handleNavClick('#roi-calculator', e)}
                  className="hover:text-[#FF6B35] transition-colors cursor-pointer"
                >
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Getting Started</a></li>
              <li><a href="/integration-guide" className="hover:text-[#FF6B35] transition-colors">Integration Guide</a></li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick('#contact', e)}
                  className="hover:text-[#FF6B35] transition-colors cursor-pointer"
                >
                  Contact Support
                </a>
              </li>
              <li><a href="/privacy-policy" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Mamut. Build, operate, transfer. Own your revenue motion forever.
          </p>
        </div>
      </div>
    </footer>
  );
};
