import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface URLSEO {
  id: string;
  url_path: string;
  page_title: string;
  meta_description: string;
  meta_keywords: string;
  og_title: string;
  og_description: string;
  og_image_url: string;
  og_image_alt: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image_url: string;
  canonical_url: string;
  robots_directive: string;
  schema_markup: any;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  schemaMarkup?: any;
}

const SEOHead = ({ title, description, image, schemaMarkup }: SEOHeadProps) => {
  // Get current path
  const path = window.location.pathname;

  // Fetch URL SEO settings
  const { data: urlSEO } = useQuery({
    queryKey: ['url-seo', path],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('url_seo_settings')
        .select('*')
        .eq('url_path', path)
        .single();

      if (error) {
        console.error('Error fetching URL SEO:', error);
        return null;
      }
      return data as URLSEO | null;
    },
  });

  useEffect(() => {
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update title
    document.title = urlSEO?.page_title || title || 'Click Katha';

    if (urlSEO) {
      // Meta description
      if (urlSEO.meta_description) {
        updateMetaTag('description', urlSEO.meta_description);
      } else {
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) descTag.remove();
      }

      // Meta keywords
      if (urlSEO.meta_keywords) {
        updateMetaTag('keywords', urlSEO.meta_keywords);
      } else {
        const kwTag = document.querySelector('meta[name="keywords"]');
        if (kwTag) kwTag.remove();
      }

      // Open Graph tags
      updateMetaTag('og:title', urlSEO.og_title || urlSEO.page_title || '');
      updateMetaTag('og:description', urlSEO.og_description || urlSEO.meta_description || '');
      updateMetaTag('og:image', urlSEO.og_image_url || '');
      updateMetaTag('og:url', window.location.href);
      updateMetaTag('og:type', 'website');

      // Twitter Card tags
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:title', urlSEO.twitter_title || urlSEO.og_title || urlSEO.page_title || '');
      updateMetaTag('twitter:description', urlSEO.twitter_description || urlSEO.og_description || urlSEO.meta_description || '');
      updateMetaTag('twitter:image', urlSEO.twitter_image_url || urlSEO.og_image_url || '');
    } else {
      // Remove all meta tags except robots
      const metaTags = document.querySelectorAll('meta');
      metaTags.forEach(tag => {
        if (tag.getAttribute('name') !== 'robots') {
          tag.remove();
        }
      });
    }

    // Always set canonical and robots
    updateMetaTag('robots', 'index, follow');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Add schema markup if provided
    if (schemaMarkup) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaMarkup);
    }

    // Cleanup function
    return () => {
      const metaTags = document.querySelectorAll('meta');
      metaTags.forEach(tag => {
        if (tag.getAttribute('name') !== 'robots') {
          tag.remove();
        }
      });
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.remove();
      const schema = document.querySelector('script[type="application/ld+json"]');
      if (schema) schema.remove();
    };
  }, [urlSEO, title, description, image, schemaMarkup]);

  return null;
};

export default SEOHead;
