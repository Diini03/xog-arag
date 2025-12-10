
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    instagram: `https://www.instagram.com/`
  };

  const handleShare = (platform: string) => {
    if (platform === 'instagram') {
      window.open(shareLinks.instagram, '_blank');
    } else {
      window.open(shareLinks[platform as keyof typeof shareLinks], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      <h3 className="text-lg font-semibold text-[#374151]">Share this article</h3>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('linkedin')}
          className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-500"
        >
          <Linkedin className="w-4 h-4 text-blue-600" />
          <span>LinkedIn</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('x')}
          className="flex items-center space-x-2 hover:bg-black hover:text-white hover:border-black"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>X</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('facebook')}
          className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-700"
        >
          <Facebook className="w-4 h-4 text-blue-700" />
          <span>Facebook</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('instagram')}
          className="flex items-center space-x-2 hover:bg-pink-50 hover:border-pink-500"
        >
          <Instagram className="w-4 h-4 text-pink-500" />
          <span>Instagram</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
