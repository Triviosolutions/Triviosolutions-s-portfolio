import { Stethoscope, ShoppingCart, Landmark, Truck, Store, FlaskConical } from 'lucide-react';

export const industriesData = {
  healthcare: {
    slug: 'healthcare',
    name: 'Healthcare',
    industryValue: 'Healthcare',
    icon: Stethoscope,
    tagline: 'Clinical software built for real patient care.',
    description: 'From clinical documentation to patient-facing apps, we build healthcare software that clinicians and patients actually trust — reliable, fast, and privacy-aware.'
  },
  'e-commerce': {
    slug: 'e-commerce',
    name: 'E-commerce',
    industryValue: 'E-commerce',
    icon: ShoppingCart,
    tagline: 'Storefronts and support tools that convert.',
    description: 'We build product support chatbots, storefront integrations, and backend systems that help e-commerce businesses sell more and support customers better.'
  },
  fintech: {
    slug: 'fintech',
    name: 'Fintech',
    industryValue: 'Fintech',
    icon: Landmark,
    tagline: 'Secure, real-time financial software.',
    description: 'Fintech products demand accuracy and security. We build analytics dashboards, payment integrations, and real-time data systems engineered for trust.'
  },
  logistics: {
    slug: 'logistics',
    name: 'Logistics',
    industryValue: 'Logistics',
    icon: Truck,
    tagline: 'Offline-first tools for the real world.',
    description: 'Logistics software has to work without perfect connectivity. We build offline-first mobile and desktop tools with real-time GPS tracking and background sync built in.'
  },
  'retail-smb': {
    slug: 'retail-smb',
    name: 'Retail & SMB',
    industryValue: 'Retail & SMB',
    icon: Store,
    tagline: 'Practical software for growing businesses.',
    description: 'We build point-of-sale, inventory, and desktop tools for retail and small businesses that need reliable software without enterprise overhead.'
  },
  'rnd-saas': {
    slug: 'rnd-saas',
    name: 'R&D / SaaS',
    industryValue: 'Internal R&D / SaaS',
    icon: FlaskConical,
    tagline: 'Internal tools and SaaS products, built fast.',
    description: 'From internal R&D tools to full SaaS products, we help teams validate ideas quickly and ship production-ready software.'
  }
};
