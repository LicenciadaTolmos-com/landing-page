export const SITE_URL = "https://licenciadatolmos.com";

export const BUSINESS = {
  name: "LicenciadaTolmos",
  legalName: "Licenciada Tolmos",
  email: "AnnaTolmos@gmail.com",
  phone: "+51958085012",
  city: "Lima",
  region: "Lima",
  country: "PE",
  address: "Lima, Peru",
  image: `${SITE_URL}/home3.webp`,
  logo: `${SITE_URL}/icono3.png`,
  languages: ["es-PE", "es"],
};

export const SERVICES = [
  {
    name: "Enfermeria a domicilio en Lima",
    description: "Atencion profesional de enfermeria a domicilio para pacientes que necesitan cuidado seguro, cercano y personalizado.",
  },
  {
    name: "Curacion de heridas y ostomias",
    description: "Limpieza, curacion y seguimiento especializado de heridas, lesiones por presion y ostomias.",
  },
  {
    name: "Inyectables y tratamiento endovenoso",
    description: "Administracion segura de medicamentos intramusculares, subcutaneos y endovenosos segun indicacion medica.",
  },
  {
    name: "Control de funciones vitales",
    description: "Monitoreo de presion arterial, pulso, temperatura, frecuencia respiratoria y oxigenacion.",
  },
  {
    name: "Colocacion de sonda nasogastrica",
    description: "Procedimiento profesional a domicilio para alimentacion, drenaje y cuidado del paciente.",
  },
];

export const FAQS = [
  {
    question: "Que servicios de enfermeria a domicilio ofrece LicenciadaTolmos?",
    answer: "Ofrece enfermeria a domicilio en Lima, curacion de heridas, cuidado de ostomias, inyectables, tratamiento endovenoso, control de funciones vitales y colocacion de sonda nasogastrica.",
  },
  {
    question: "Atienden curacion de heridas y lesiones por presion?",
    answer: "Si. Se realiza evaluacion, limpieza, curacion y seguimiento de heridas, escaras, lesiones por presion y ostomias con medidas estrictas de bioseguridad.",
  },
  {
    question: "En que ciudad brindan atencion?",
    answer: "La atencion esta enfocada en Lima, Peru, con servicios profesionales de enfermeria a domicilio.",
  },
  {
    question: "Pueden aplicar inyectables o tratamiento endovenoso?",
    answer: "Si. La administracion de medicamentos intramusculares, subcutaneos o endovenosos se realiza de manera segura y de acuerdo con indicacion medica.",
  },
];

export const ROUTES = [
  {
    path: "/",
    title: "Enfermeria a domicilio en Lima | LicenciadaTolmos",
    description: "Licenciada en enfermeria en Lima. Curacion de heridas, ostomias, inyectables, tratamiento endovenoso, control de funciones vitales y atencion a domicilio.",
    keywords: "enfermeria a domicilio Lima, curacion de heridas Lima, enfermera a domicilio, inyectables a domicilio, ostomias Lima",
    robots: "index, follow, max-image-preview:large",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/servicios",
    aliases: ["/services"],
    title: "Servicios de enfermeria a domicilio en Lima | LicenciadaTolmos",
    description: "Servicios de enfermeria a domicilio: curacion de heridas, lesiones por presion, ostomias, inyectables, tratamiento endovenoso y control de funciones vitales.",
    keywords: "servicios de enfermeria Lima, curacion de heridas, tratamiento endovenoso, inyectables, control de funciones vitales",
    robots: "index, follow, max-image-preview:large",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/contacto",
    aliases: ["/contact"],
    title: "Contacto enfermeria a domicilio en Lima | LicenciadaTolmos",
    description: "Contacta a LicenciadaTolmos para servicios profesionales de enfermeria a domicilio en Lima, Peru.",
    keywords: "contacto enfermera Lima, enfermeria a domicilio contacto, LicenciadaTolmos Lima",
    robots: "index, follow, max-image-preview:large",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/sobre-mi",
    aliases: ["/about"],
    title: "Licenciada en enfermeria en Lima | LicenciadaTolmos",
    description: "Conoce la experiencia profesional de LicenciadaTolmos en enfermeria, hospitalizacion, cuidado avanzado de heridas y ostomias.",
    keywords: "licenciada en enfermeria Lima, enfermera profesional Lima, cuidado de heridas y ostomias",
    robots: "index, follow, max-image-preview:large",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/doctors",
    title: "Profesionales de salud | LicenciadaTolmos",
    description: "Seccion reservada para profesionales de salud de LicenciadaTolmos.",
    keywords: "profesionales de salud Lima",
    robots: "noindex, follow",
    priority: "0.2",
    changefreq: "yearly",
    hidden: true,
  },
  {
    path: "/appointment",
    title: "Reservar cita | LicenciadaTolmos",
    description: "Formulario de cita para servicios profesionales de enfermeria a domicilio.",
    keywords: "reservar cita enfermeria Lima",
    robots: "noindex, nofollow",
    priority: "0.2",
    changefreq: "yearly",
    hidden: true,
  },
];

export function getRouteByPath(pathname) {
  return ROUTES.find((route) => route.path === pathname || route.aliases?.includes(pathname)) || null;
}

export function canonicalUrl(path) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
