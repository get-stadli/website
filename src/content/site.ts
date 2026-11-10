// src/content/site.ts
export type SiteNavItem = {
  label: string;
  href: string;
  /** Optional dropdown under a header link */
  children?: SiteNavItem[];
};

export type FooterColumn = {
  title: string;
  links: SiteNavItem[];
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  cta: SiteNavItem;
  footer: {
    about: string;
    columns: FooterColumn[];
    languages: (SiteNavItem & { current?: boolean })[];
  };
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "Stadli",
  tagline: "The 360° platform for sports and live events.",
  description: "Ticketing, Fan Data & Marketing in One Place",
  url: import.meta.env.SITE_URL ?? "https://example.com",
  locale: "en",
  author: {
    name: "Stadli",
    email: "hello@example.com",
    url: "https://example.com",
    socials: {
      linkedin: "https://www.linkedin.com/"
    }
  },
  nav: [
    {
      label: "Platform",
      href: "/#platform",
      children: [
        { label: "Ticketing & Commerce", href: "/platform/ticketing-commerce" },
        { label: "Fan CRM", href: "/platform/fan-crm" },
        { label: "Marketing Tools", href: "/platform/marketing-tools" },
        { label: "Intelligence & AI", href: "/platform/intelligence-ai" }
      ]
    },
    {
      label: "Solutions",
      href: "/solutions/sport-teams",
      children: [
        { label: "Stadli for Sport Teams", href: "/solutions/sport-teams" },
        { label: "Stadli for Live Events", href: "/solutions/live-events" }
      ]
    },
    { label: "Resources", href: "/articles" },
    {
      label: "Company",
      href: "/about",
      children: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" }
      ]
    }
  ],
  cta: { label: "Book a demo", href: "/contact" },
  footer: {
    about:
      "Ticketing, audience data and marketing for the people who bring people together.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Ticketing & Commerce", href: "/platform/ticketing-commerce" },
          { label: "Fan CRM", href: "/platform/fan-crm" },
          { label: "Marketing Tools", href: "/platform/marketing-tools" },
          { label: "Intelligence & AI", href: "/platform/intelligence-ai" }
        ]
      },
      {
        title: "Solutions",
        links: [
          { label: "Sport teams", href: "/solutions/sport-teams" },
          { label: "Live events", href: "/solutions/live-events" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/articles" },
          { label: "Case studies", href: "/articles?type=case-study" },
          { label: "News", href: "/articles?type=news" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" }
        ]
      },
      {
        title: "Legal",
        links: [{ label: "Legal notice", href: "/legal" }]
      }
    ],
    languages: [
      { label: "English", href: "/", current: true },
      { label: "Français", href: "/" }
    ]
  },
  seo: {
    ogImage: "/images/og/og-default.jpg",
    robots: "index,follow",
    themeColor: "#020202"
  }
};
