import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set proper HTTP status for SEO
    document.title = "404 - Page Not Found | Mamut";
    
    // Add meta tags for 404 page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sorry, the page you are looking for could not be found. Return to Mamut\'s homepage for outbound sales solutions.');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#FF6B35] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or you may have mistyped the URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            asChild
            size="lg" 
            className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>
          
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-6 rounded-xl transition-all duration-300"
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Visit Our Blog
            </Link>
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            Looking for our outbound sales solutions? Check out our homepage.
          </p>
          <div className="flex justify-center items-center space-x-6 text-xs text-gray-400">
            <span>🔒 Secure</span>
            <span>⚡ Fast Setup</span>
            <span>🎯 Results Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
