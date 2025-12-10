
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SocialShare from "@/components/SocialShare";
import { ReactNode } from "react";

interface BlogArticleLayoutProps {
  children: ReactNode;
  currentUrl: string;
  title: string;
  description: string;
}

export const BlogArticleLayout = ({ children, currentUrl, title, description }: BlogArticleLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      
      {/* Social Share Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-gray-200 mt-12 pt-8">
            <SocialShare 
              url={currentUrl}
              title={title}
              description={description}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
