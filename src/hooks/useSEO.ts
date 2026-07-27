import { useEffect } from 'react';
import { BUSINESS_INFO } from '../utils/data';

interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  schemaMarkup?: object;
}

export const useSEO = ({ title, description, keywords, canonicalUrl, schemaMarkup }: SEOMetadata) => {
  useEffect(() => {
    // 1. Set Title
    document.title = `${title} | ${BUSINESS_INFO.name}`;

    // Helper function to create or update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let element = isProperty 
        ? document.querySelector(`meta[property="${name}"]`) 
        : document.querySelector(`meta[name="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Standard Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // 3. Set Open Graph (OG) Meta Tags
    updateMetaTag('og:title', `${title} | ${BUSINESS_INFO.name}`, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800', true);

    // 4. Set Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${title} | ${BUSINESS_INFO.name}`);
    updateMetaTag('twitter:description', description);

    // 5. Manage Canonical Link
    const finalCanonicalUrl = canonicalUrl || window.location.href;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonicalUrl);

    // 6. Manage JSON-LD Schema
    const scriptId = 'json-ld-schema';
    let schemaScript = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (schemaMarkup) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = scriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schemaMarkup);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    return () => {
      // Clean up dynamic schema script when unmounting to avoid leak
      const dynamicScript = document.getElementById(scriptId);
      if (dynamicScript) {
        dynamicScript.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, schemaMarkup]);
};
