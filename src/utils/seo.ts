// SEO utility functions for local SEO optimization

export const generateLocalSchema = (city: string, state: string, stateAbbr: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Go Green Portable Toilets - ${city}`,
    "description": `Professional portable toilet rentals in ${city}, ${stateAbbr}. Clean, reliable restroom solutions for construction sites, events, and festivals.`,
    "url": `https://gogreenportabletoilets.com/${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}`,
    "telephone": "+1-555-GO-GREEN",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": stateAbbr,
      "addressCountry": "US"
    },
    "serviceType": [
      "Portable Toilet Rental",
      "Construction Restroom Rental", 
      "Event Restroom Rental",
      "Festival Portable Toilets",
      "Wedding Restroom Rental"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Su 06:00-22:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247"
    }
  };
};

export const generateBreadcrumbSchema = (city: string, stateAbbr: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gogreenportabletoilets.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Service Areas",
        "item": "https://gogreenportabletoilets.com/service-areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${city}, ${stateAbbr}`,
        "item": `https://gogreenportabletoilets.com/${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}`
      }
    ]
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Portable Toilet Rental",
    "description": "Professional portable toilet and restroom rental services for construction sites, events, festivals, and emergency situations.",
    "provider": {
      "@type": "Organization",
      "name": "Go Green Portable Toilets"
    },
    "serviceType": "Portable Toilet Rental",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Portable Toilet Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Portable Toilet Rental",
            "description": "Basic portable toilets for construction sites and outdoor events"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Deluxe Portable Restroom Rental",
            "description": "Enhanced portable restrooms with hand washing stations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Portable Restroom Rental", 
            "description": "Premium portable restrooms with full amenities"
          }
        }
      ]
    }
  };
};