import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BUSINESS, FAQS, SERVICES, SITE_URL, canonicalUrl, getRouteByPath } from "./config";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function buildSchemas(route) {
  const url = canonicalUrl(route.path);
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: {
      "@type": "City",
      name: "Lima",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PE",
      },
    },
    medicalSpecialty: ["Nursing", "WoundCare"],
    knowsAbout: SERVICES.map((service) => service.name),
    availableLanguage: BUSINESS.languages,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/servicios#services`,
    name: "Servicios de enfermeria a domicilio en Lima",
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: "Lima, Peru",
    serviceType: SERVICES.map((service) => service.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de enfermeria",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      ...(route.path === "/" ? [] : [{
        "@type": "ListItem",
        position: 2,
        name: route.title.split("|")[0].trim(),
        item: url,
      }]),
    ],
  };

  return [localBusiness, serviceSchema, faqSchema, breadcrumbSchema];
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const route = getRouteByPath(location.pathname) || {
      path: location.pathname,
      title: "Pagina no encontrada | LicenciadaTolmos",
      description: "La pagina solicitada no existe en LicenciadaTolmos.",
      keywords: "LicenciadaTolmos",
      robots: "noindex, nofollow",
    };
    const canonical = canonicalUrl(route.path);
    const image = `${SITE_URL}/home3-og.webp`;

    document.documentElement.lang = "es-PE";
    document.title = route.title;

    upsertMeta('meta[name="description"]', { name: "description", content: route.description });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: route.keywords });
    upsertMeta('meta[name="robots"]', { name: "robots", content: route.robots });
    upsertMeta('meta[name="author"]', { name: "author", content: BUSINESS.name });
    upsertMeta('meta[name="geo.region"]', { name: "geo.region", content: "PE-LIM" });
    upsertMeta('meta[name="geo.placename"]', { name: "geo.placename", content: "Lima, Peru" });
    upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#16a34a" });

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "es_PE" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: BUSINESS.name });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: route.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: route.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: "LicenciadaTolmos, enfermeria a domicilio en Lima" });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: route.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: route.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    upsertLink("canonical", canonical);

    document.querySelectorAll('script[data-seo-schema="true"]').forEach((script) => script.remove());
    buildSchemas(route).forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [location.pathname]);

  return null;
}
