import type { MaterialSymbolName } from "./MaterialSymbol";

export const navLinks = [
  { href: "#home", label: "Home", active: true },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export const aboutHighlights = [
  {
    icon: "factory" as MaterialSymbolName,
    title: "Who We Are",
    description:
      "GRIDLINE is a premium supplier specializing in high-tension (HT) and low-tension (LT) line materials. We act as the backbone for regional power grids.",
  },
  {
    icon: "verified" as MaterialSymbolName,
    title: "Why Choose Us",
    description:
      "Our materials undergo rigorous testing for conductivity, tension strength, and environmental resistance, ensuring zero-fail performance.",
  },
];

export const productCards = [
  {
    icon: "power" as MaterialSymbolName,
    badge: "HT SPECIALIST",
    title: "Insulators",
    slug: "insulators",
    description:
      "High-performance porcelain and polymer insulators designed for maximum dielectric strength.",
  },
  {
    icon: "electrical_services" as MaterialSymbolName,
    badge: "CORE MATERIAL",
    title: "Conductors",
    slug: "conductors",
    description:
      "ACSR and AAAC conductors providing high tensile strength and superior conductivity.",
  },
  {
    icon: "settings_input_component" as MaterialSymbolName,
    title: "Cables",
    slug: "cables",
    description:
      "Comprehensive range of armored and unarmored LT/HT cables for diverse distribution applications.",
  },
  {
    icon: "construction" as MaterialSymbolName,
    title: "Hardware & Fittings",
    slug: "hardware-fittings",
    description:
      "Precision hot-dip galvanized hardware, clamps, and tower accessories for structural integrity.",
  },
  {
    icon: "precision_manufacturing" as MaterialSymbolName,
    title: "Fabrications",
    slug: "fabrications",
    description:
      "Custom-designed steel structures, pole mounts, and specialized fabrications for substations.",
  },
];

export const contacts = [
  {
    icon: "call",
    label: "Phone",
    value: "+91 994530 44369",
    href: "tel:+9199453044369",
  },
  {
    icon: "mail",
    label: "Email",
    value: "info@gridlinematerial.com",
    href: "mailto:info@gridlinematerial.com",
  },
  {
    icon: "location_on",
    label: "Main Office",
    value:
      "No. 3 & 4, Kamalapuram NH 75, Pernambut, Vellore Tamil Nadu, India - 635111",
    href: "https://maps.app.goo.gl/Z8Mwg5EVUexAWeUM6",
  },
  {
    icon: "schedule",
    label: "Business Hours",
    value: "Mon - Fri: 09:00 AM - 06:00 PM | Sat: 09:00 AM - 01:00 PM",
  },
];
