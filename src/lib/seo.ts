// SEO Configuration and Utilities

export const SEO_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://vardhanproject.com",
  siteName: "Vardhan Project",
  siteDescription:
    "Premium residential properties with world-class amenities, expert consultation, and prime location",
  twitterHandle: "@vardhanproject",
  defaultImage: "https://vardhanproject.com/og-image.jpg",
};

export const generateMetaTags = (
  title: string,
  description: string,
  image?: string,
  url?: string
) => {
  return {
    title: `${title} | Vardhan Project`,
    description,
    openGraph: {
      title: `${title} | Vardhan Project`,
      description,
      url: url || SEO_CONFIG.baseUrl,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image || SEO_CONFIG.defaultImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Vardhan Project`,
      description,
      images: [image || SEO_CONFIG.defaultImage],
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vardhan Project",
    url: "https://vardhanproject.com",
    logo: "https://vardhanproject.com/logo.png",
    description:
      "Premium residential properties with world-class amenities and expert consultation",
    sameAs: [
      "https://www.facebook.com/vardhanproject",
      "https://www.instagram.com/vardhanproject",
      "https://www.twitter.com/vardhanproject",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mulund, Mumbai",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400080",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9773069318",
      contactType: "Customer Service",
    },
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generatePropertySchema = (property: {
  name: string;
  description: string;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  image?: string;
  address?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: property.name,
    description: property.description,
    image: property.image || SEO_CONFIG.defaultImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address || "Mulund, Mumbai",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400080",
      addressCountry: "IN",
    },
    numberOfBedrooms: property.bedrooms,
    numberOfBathrooms: property.bathrooms,
  };
};
