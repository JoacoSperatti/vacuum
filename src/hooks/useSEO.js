import { useEffect } from 'react';

/**
 * Hook para gestionar dinámicamente títulos, meta tags, Open Graph,
 * Twitter Cards y JSON-LD estructurado para SEO óptimo.
 */
export function useSEO(optionsOrTitle, maybeDescription, maybeKeywords) {
  let config = {};
  if (typeof optionsOrTitle === 'string') {
    config = {
      title: optionsOrTitle,
      description: maybeDescription,
      keywords: maybeKeywords
    };
  } else if (optionsOrTitle && typeof optionsOrTitle === 'object') {
    config = optionsOrTitle;
  }

  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = 'https://vacuumcarniceria.com.ar/assets/images/logo.jpg',
    ogType = 'website',
    schema
  } = config;

  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // Helper para actualizar o crear meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta description & Open Graph / Twitter
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    if (title) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href.split('?')[0] : '');
    if (currentUrl) {
      setMetaTag('property', 'og:url', currentUrl);
      
      // Canonical link tag
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', currentUrl);
    }

    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // 3. Structured Data JSON-LD dinámico por página
    let scriptTag = document.getElementById('page-structured-data');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, canonical, ogImage, ogType, schema]);
}
