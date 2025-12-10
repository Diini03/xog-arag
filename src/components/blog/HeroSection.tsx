
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  category?: string;
  date?: string;
  readTime?: string;
}

export const HeroSection = ({ 
  title, 
  description, 
  imageUrl,
  category = "Strategy",
  date = "June 15, 2025", 
  readTime = "5 min read" 
}: HeroSectionProps) => {
  return (
    <section className="pt-20 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-glow mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
