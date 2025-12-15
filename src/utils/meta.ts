export interface MetaTagsConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
}

export const setMetaTags = (config: MetaTagsConfig) => {
  if (typeof window === 'undefined') return;

  document.title = config.title;

  const setOrCreateMeta = (attribute: string, value: string, content: string) => {
    let meta = document.querySelector(`meta[${attribute}="${value}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, value);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  setOrCreateMeta('name', 'description', config.description);

  if (config.keywords) {
    setOrCreateMeta('name', 'keywords', config.keywords);
  }

  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);
  }

  setOrCreateMeta('property', 'og:title', config.ogTitle || config.title);
  setOrCreateMeta('property', 'og:description', config.ogDescription || config.description);
  setOrCreateMeta('property', 'og:type', config.ogType || 'website');
  setOrCreateMeta('property', 'og:url', config.canonical || window.location.href);

  if (config.ogImage) {
    setOrCreateMeta('property', 'og:image', config.ogImage);
  }

  setOrCreateMeta('name', 'twitter:card', config.twitterCard || 'summary_large_image');
  setOrCreateMeta('name', 'twitter:title', config.ogTitle || config.title);
  setOrCreateMeta('name', 'twitter:description', config.ogDescription || config.description);

  if (config.ogImage) {
    setOrCreateMeta('name', 'twitter:image', config.ogImage);
  }
};

export const generateCityMetaTags = (city: string, state: string, stateCode: string): MetaTagsConfig => ({
  title: `Portable Toilet Rentals in ${city}, ${stateCode} | Same-Day Delivery | Flush On Demand`,
  description: `Professional portable toilet rentals in ${city}, ${state}. Same-day delivery, ADA-compliant units, 24/7 service. Trusted by 500+ construction sites & events. Call (888) 519-9743 for a free quote.`,
  canonical: `https://flushondemand.com/${city.toLowerCase().replace(/\s+/g, '-')}-${stateCode.toLowerCase()}`,
  keywords: `portable toilet rental ${city}, porta potty ${city}, restroom rental ${city}, ${stateCode} portable toilets, construction toilet rental ${city}, event restroom ${city}`,
  ogTitle: `Portable Toilet Rentals in ${city}, ${stateCode} - Flush On Demand`,
  ogDescription: `Same-day portable toilet delivery in ${city}. Clean, reliable units for construction sites, events & more. 24/7 service. Call (888) 519-9743.`,
  ogImage: 'https://flushondemand.com/hero_image.jpg',
  ogType: 'website'
});

export const generateServiceMetaTags = (serviceName: string, description: string): MetaTagsConfig => ({
  title: `${serviceName} | Professional Portable Toilet Rentals | Flush On Demand`,
  description: description,
  canonical: `https://flushondemand.com/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
  keywords: `${serviceName}, portable toilet rental, porta potty, restroom rental, sanitation services`,
  ogTitle: `${serviceName} - Flush On Demand`,
  ogDescription: description,
  ogImage: 'https://flushondemand.com/hero_image.jpg',
  ogType: 'service'
});

export const generateStateMetaTags = (state: string, stateCode: string, cityCount: number): MetaTagsConfig => ({
  title: `${state} Portable Toilet Rentals | Serving ${cityCount}+ Cities | Flush On Demand`,
  description: `Professional portable toilet rentals across ${state}. Serving ${cityCount}+ cities with same-day delivery, ADA-compliant units, and 24/7 support. Call (888) 519-9743.`,
  canonical: `https://flushondemand.com/${stateCode.toLowerCase()}`,
  keywords: `portable toilet rental ${state}, ${stateCode} porta potty, ${state} restroom rental, construction toilets ${state}`,
  ogTitle: `Portable Toilet Rentals in ${state} - Flush On Demand`,
  ogDescription: `Same-day portable toilet delivery across ${state}. Serving ${cityCount}+ cities. Call (888) 519-9743 for a free quote.`,
  ogImage: 'https://flushondemand.com/hero_image.jpg',
  ogType: 'website'
});
