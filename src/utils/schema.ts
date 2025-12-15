export interface SchemaOrganization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  telephone: string;
  email?: string;
  address?: {
    "@type": "PostalAddress";
    addressCountry: string;
  };
  sameAs: string[];
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    reviewCount: string;
  };
}

export interface SchemaLocalBusiness {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  "@id": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  priceRange: string;
  image: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  areaServed: {
    "@type": "City";
    name: string;
  };
  openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    reviewCount: string;
  };
}

export interface SchemaBreadcrumb {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface SchemaService {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "Organization";
    name: string;
  };
  areaServed: string;
  serviceType: string;
}

export const createOrganizationSchema = (): SchemaOrganization => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Flush On Demand",
  url: "https://flushondemand.com",
  logo: "https://flushondemand.com/logo.png",
  telephone: "+18885199743",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500"
  }
});

export const createLocalBusinessSchema = (
  city: string,
  state: string,
  stateCode: string,
  description?: string
): SchemaLocalBusiness => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://flushondemand.com/${city.toLowerCase().replace(/\s+/g, '-')}-${stateCode.toLowerCase()}`,
  name: `Flush On Demand - Portable Toilet Rentals in ${city}, ${stateCode}`,
  description: description || `Professional portable toilet and restroom rentals in ${city}, ${stateCode}. Same-day delivery, weekly service, ADA-compliant units for construction sites, events, and more.`,
  url: `https://flushondemand.com/${city.toLowerCase().replace(/\s+/g, '-')}-${stateCode.toLowerCase()}`,
  telephone: "+18885199743",
  priceRange: "$$",
  image: "https://flushondemand.com/hero_image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressRegion: stateCode,
    addressCountry: "US"
  },
  areaServed: {
    "@type": "City",
    name: `${city}, ${stateCode}`
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500"
  }
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>): SchemaBreadcrumb => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createServiceSchema = (
  serviceName: string,
  description: string,
  areaServed: string
): SchemaService => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "Organization",
    name: "Flush On Demand"
  },
  areaServed: areaServed,
  serviceType: "Portable Toilet Rental"
});

export const createProductSchema = (productName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: productName,
  description: description,
  brand: {
    "@type": "Brand",
    name: "Flush On Demand"
  },
  offers: price ? {
    "@type": "Offer",
    price: price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Flush On Demand"
    }
  } : undefined,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500"
  }
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const injectSchema = (schema: object) => {
  if (typeof window === 'undefined') return;

  const scriptId = 'structured-data';
  let script = document.getElementById(scriptId);

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

export const injectMultipleSchemas = (schemas: object[]) => {
  if (typeof window === 'undefined') return;

  schemas.forEach((schema, index) => {
    const scriptId = `structured-data-${index}`;
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  });
};
