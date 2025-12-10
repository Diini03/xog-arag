
import { useEffect } from 'react';

interface OpenGraphMetaProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  section?: string;
  tags?: string;
}

export const useOpenGraphMeta = ({
  title,
  description,
  image,
  url,
  type = 'article',
  siteName = 'Mamut',
  author = 'Mamut Team',
  publishedTime,
  section,
  tags
}: OpenGraphMetaProps) => {
  useEffect(() => {
    // Set page title
    document.title = `${title} | ${siteName}`;

    // Default image if none provided
    const defaultImage = `${window.location.origin}/lovable-uploads/eac12b9c-5fb2-4b07-96de-df4a89cd8fe9.png`;
    const ogImage = image || defaultImage;

    // Remove existing meta tags to avoid duplicates
    const metaSelectors = [
      'meta[name="description"]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'meta[property^="article:"]'
    ];
    
    metaSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(meta => meta.remove());
    });

    // Meta tags data with LinkedIn optimization
    const metaData = [
      // Basic meta description
      { name: 'description', content: description },
      
      // Open Graph tags (Facebook, LinkedIn, etc.)
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:secure_url', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '627' },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: '@Mamut' },
      { name: 'twitter:creator', content: '@Mamut' },
      
      // Article-specific tags
      ...(author ? [{ property: 'article:author', content: author }] : []),
      ...(publishedTime ? [{ property: 'article:published_time', content: publishedTime }] : []),
      ...(section ? [{ property: 'article:section', content: section }] : []),
      ...(tags ? [{ property: 'article:tag', content: tags }] : [])
    ];

    // Add meta tags to document head
    metaData.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    // Cleanup function to restore default meta tags when component unmounts
    return () => {
      document.title = "Mamut - AI-Powered Outbound Sales Solutions";
      
      // Remove current meta tags
      metaSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(meta => meta.remove());
      });
      
      // Restore original site meta tags
      const originalMetas = [
        { name: 'description', content: 'AI-driven go-to-market plugin for startups ready to scale beyond inbound with professional BDR services and B2B lead generation at 60% less cost.' },
        { property: 'og:title', content: 'Mamut - AI-Powered Outbound Sales Solutions' },
        { property: 'og:description', content: 'AI-driven go-to-market plugin for startups ready to scale beyond inbound' },
        { property: 'og:image', content: '/lovable-uploads/eac12b9c-5fb2-4b07-96de-df4a89cd8fe9.png' }
      ];
      
      originalMetas.forEach(({ name, property, content }) => {
        const meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      });
    };
  }, [title, description, image, url, type, siteName, author, publishedTime, section, tags]);
};
