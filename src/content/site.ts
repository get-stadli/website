// src/content/site.ts
export type SiteNavItem = {
  label: string;
  href: string;
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
    { label: "Platform", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Legal", href: "/legal" }
  ],
  cta: { label: "Book a demo", href: "/contact" },
  footer: {
    about:
      "Ticketing, audience data and marketing for the people who bring people together.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Legal", href: "/legal" }
        ]
      },
      {
        title: "Follow",
        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/" },
          { label: "Sitemap", href: "/sitemap-index.xml" }
        ]
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
