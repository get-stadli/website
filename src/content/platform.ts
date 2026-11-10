// Platform pages: /platform/<slug>
import type { MockKind } from "../components/sections/mocks";

export type PlatformPage = {
  slug: string;
  name: string;
  /** One line used on the homepage and in menus */
  summary: string;
  lede: string;
  image: string;
  /** Show the "Book a demo" button in the hero */
  heroCta?: boolean;
  rows: { title: string; text: string; mock: MockKind; link?: { label: string; href: string } }[];
  groups: { title: string; items: string[] }[];
};

const intelligenceRow = {
  title: "Intelligence & AI",
  text: "Live dashboards and AI insights that guide your next move.",
  mock: "chart" as const,
  link: { label: "Learn more", href: "/platform/intelligence-ai" }
};

export const platformPages: PlatformPage[] = [
  {
    slug: "ticketing-commerce",
    name: "Ticketing & Commerce",
    summary:
      "Everything you need to manage ticket sales, passes, merchandise, payments and admission, from your branded storefront to the gate.",
    lede:
      "Sell tickets, passes, bundles and merchandise through your branded storefront and box office. Manage seating, payments, orders and admission in one place, with shared inventory and customer records. Give fans bilingual purchasing, digital ticket access and flexible payment options, while staff handle fulfillment, refunds and event operations with appropriate permissions.",
    image: "/images/articles/end-of-season-report.webp",
    heroCta: true,
    rows: [
      {
        title: "Sell tickets, passes and merchandise",
        text: "Offer reserved seats, general admission, season passes, bundles and products through your storefront and box office.",
        mock: "shop"
      },
      {
        title: "Manage every order and payment",
        text: "Handle payments, installments, invoices, refunds, order changes and merchandise fulfillment.",
        mock: "orders"
      },
      {
        title: "Deliver tickets and manage admission",
        text: "Give fans digital ticket access and transfers, while your team manages printing, scanning and gate controls.",
        mock: "ticket"
      },
      intelligenceRow
    ],
    groups: [
      {
        title: "Storefront & Event Management",
        items: [
          "Branded storefront",
          "Visual website builder & responsive previews",
          "Event & product showcases",
          "French & English content",
          "FAQs & purchase policies",
          "Event creation & scheduling",
          "Event duplication & bulk editing",
          "Season organization & sales controls",
          "Data imports, migration & backups"
        ]
      },
      {
        title: "Seating & Online Ticket Sales",
        items: [
          "Visual venue designer",
          "Reserved seating & general admission",
          "Accessible-seat attributes",
          "Seating inventory controls",
          "Interactive seat selection",
          "Guest checkout",
          "Persistent shopping carts",
          "Temporary seat reservations",
          "Waiting room & controlled purchase access"
        ]
      },
      {
        title: "Passes, Bundles & Group Offers",
        items: [
          "Reserved-seat & general-admission passes",
          "Pass pricing variants & holder management",
          "Redeemable ticket credits & eligibility rules",
          "Credit balances & transfers",
          "Eligible event changes",
          "Missed-event conversions",
          "Staff-assisted seat upgrades",
          "Group rates & fixed ticket packs",
          "Private offers & assisted group sales"
        ]
      },
      {
        title: "Box Office & Merchandise",
        items: [
          "Walk-up sales & manual orders",
          "Complimentary tickets & barcode lookup",
          "Product variants & collections",
          "Stock tracking & receiving",
          "Merchandise returns & restocking",
          "Product barcode labels",
          "Ticket extras & order add-ons",
          "Shipping methods & free-shipping thresholds",
          "Gift cards, checkout redemption, balances & printable certificates"
        ]
      },
      {
        title: "Payments & Order Management",
        items: [
          "Online payments & payment links",
          "Invoices & deposits",
          "Outstanding balances & offline payment records",
          "Stripe Terminal card-reader payments",
          "Assisted season-pass installment schedules",
          "Installment balances & payment-method management",
          "Full & partial refunds",
          "Order cancellations",
          "Seat relocation & ticket reissues"
        ]
      },
      {
        title: "Fan Experience & Event Operations",
        items: [
          "Fan accounts, tickets, passes & receipts",
          "Ticket transfers & Apple/Google Wallet access",
          "Branded transactional emails & delivery resends",
          "Ticket styling, PDF downloads & individual or batch printing",
          "QR scanning, offline scanning & scan history",
          "Gate restrictions & re-entry controls",
          "VIP credentials & accreditation",
          "Staff roles, invitations & custom permissions",
          "Administrative audit history"
        ]
      }
    ]
  },
  {
    slug: "fan-crm",
    name: "Fan CRM",
    summary:
      "Connect your fan data to build audiences and manage relationships. Rich profiles and dynamic segments, with consent, preferences and privacy built in.",
    lede:
      "Bring contact details, purchases, attendance, campaign engagement and survey activity into one fan profile. Organize relationships with tags and notes, build audiences from real behavior, and manage consent and language preferences. Import existing contacts and give staff appropriate access to the customer information they need across your events and seasons.",
    image: "/images/photos/card1.webp",
    rows: [
      {
        title: "Know your fans",
        text: "Bring contact details, purchases, attendance, engagement and customer value into one shared profile.",
        mock: "profile"
      },
      {
        title: "Build the right audiences",
        text: "Turn fan behavior into dynamic segments and saved groups, with templates, previews and AI assistance.",
        mock: "audience"
      },
      {
        title: "Manage relationships and preferences",
        text: "Keep contacts organized with tags and notes, manage consent and preferences, and give staff appropriate access.",
        mock: "prefs"
      },
      intelligenceRow
    ],
    groups: [
      {
        title: "Fan Profiles",
        items: [
          "Fan names",
          "Email addresses",
          "Phone numbers",
          "Company information",
          "Postal addresses",
          "Birthdays",
          "Preferred language",
          "Customer history",
          "Self-service profile updates"
        ]
      },
      {
        title: "Fan Activity & Customer Value",
        items: [
          "Purchase history",
          "Ticket history",
          "Attendance history",
          "Marketing interactions",
          "Survey activity",
          "Lifetime revenue",
          "Order counts",
          "Recent activity",
          "Loyalty-point balances"
        ]
      },
      {
        title: "Audience Segmentation",
        items: [
          "Purchase-based conditions",
          "Attendance-based conditions",
          "Pass-ownership conditions",
          "Location-based conditions",
          "Engagement-based conditions",
          "Survey-response conditions",
          "Automatically refreshed segments",
          "Saved audience snapshots",
          "Manually selected contact groups"
        ]
      },
      {
        title: "Audience Building & Contact Imports",
        items: [
          "Common audience templates",
          "Matching contact counts",
          "Audience membership previews",
          "AI-generated segmentation rules",
          "CSV contact imports",
          "Bulk contact updates",
          "Contact tag imports",
          "Audience membership imports",
          "Supported onboarding migration"
        ]
      },
      {
        title: "Consent & Privacy",
        items: [
          "Email communication preferences",
          "SMS communication preferences",
          "Consent records",
          "Suppression management",
          "Self-service marketing preferences",
          "Contact deletion",
          "Contact anonymization",
          "Supported application backups",
          "Supported data restoration"
        ]
      },
      {
        title: "Staff Collaboration & Administration",
        items: [
          "Contact tags",
          "Shared internal notes",
          "Custom staff roles",
          "Module permissions",
          "Administrative search",
          "Administrative audit history",
          "Internal knowledge resources",
          "In-app documentation",
          "Support-ticket management"
        ]
      }
    ]
  },
  {
    slug: "marketing-tools",
    name: "Marketing Tools",
    summary:
      "Promote your events, grow your audience and bring fans back with targeted campaigns and a suite of marketing tools.",
    lede:
      "Promote events, grow audiences and sell through a branded storefront connected to your marketing tools. Build pages, publish bilingual content, send email and SMS campaigns, and collect feedback. Combine targeted offers with automated workflows, then measure engagement and attributed sales using connected customer data, campaign tracking and website analytics tools.",
    image: "/images/articles/college-sports-loyalty.webp",
    rows: [
      {
        title: "Build your branded presence",
        text: "Create your storefront, publish bilingual pages and showcase events, products and offers.",
        mock: "shop"
      },
      {
        title: "Reach fans with targeted campaigns",
        text: "Build and send email and SMS campaigns connected to your audiences, promotions and sales.",
        mock: "message"
      },
      {
        title: "Bring fans back automatically",
        text: "Automate follow-ups, collect feedback and measure which campaigns bring fans back to buy.",
        mock: "chart"
      }
    ],
    groups: [
      {
        title: "Storefront & Brand Management",
        items: [
          "Branded storefront",
          "Visual homepage builder",
          "Event & product showcases",
          "Custom navigation & responsive previews",
          "Logos, colors & typography",
          "Hero images, video & reusable media",
          "French & English content",
          "FAQs & policy pages",
          "Prelaunch pages, countdowns & scheduled opening"
        ]
      },
      {
        title: "Email & SMS Campaigns",
        items: [
          "Drag-and-drop email builder",
          "Reusable templates, event cards & product promotions",
          "Transactional email branding",
          "CRM audience targeting",
          "Email drafts, previews & test sends",
          "Email scheduling & paced delivery",
          "SMS scheduling & test messages",
          "SMS short links & delivery tracking",
          "SMS opt-out handling"
        ]
      },
      {
        title: "Offers & Promotions",
        items: [
          "Percentage discounts",
          "Fixed-amount discounts",
          "Discount validity windows",
          "Redemption limits",
          "Product eligibility restrictions",
          "Event eligibility restrictions",
          "Gift-with-purchase promotions",
          "Quantity pricing",
          "Branded link-in-bio pages & campaign short links"
        ]
      },
      {
        title: "Marketing Automation",
        items: [
          "Purchase triggers",
          "Attendance triggers",
          "Milestone & event timing triggers",
          "Audience-change triggers",
          "Automated emails",
          "Automated contact tagging",
          "Actions using existing discounts & rewards",
          "Staff follow-up flags",
          "Webhook actions"
        ]
      },
      {
        title: "Content & Fan Engagement",
        items: [
          "AI-generated editable email content",
          "AI-generated survey questions",
          "AI-generated imagery",
          "Survey templates",
          "Multiple survey question types",
          "Survey branching",
          "Shareable survey links",
          "Targeted feedback invitations",
          "Email signup popups with branded copy & imagery"
        ]
      },
      {
        title: "Campaign Measurement & Team Access",
        items: [
          "Campaign engagement",
          "Attributed sales",
          "UTM attribution",
          "Google Analytics integration",
          "Meta Pixel integration",
          "Website analytics",
          "Staff invitations & marketing roles",
          "Custom permissions",
          "Shared internal guidance"
        ]
      }
    ]
  },
  {
    slug: "intelligence-ai",
    name: "Intelligence & AI",
    summary:
      "Stop waiting for the post-season recap. Dashboards, custom reports and AI insights show what’s working while you can still act.",
    lede:
      "Understand sales, attendance, merchandise, marketing and fan feedback through connected dashboards and customizable reports. Compare performance, track acquisition sources and explore historical data. Use AI to build reports, define audiences, create content and summarize responses, supported by your brand guidance and shared knowledge about your organization, operations, products and audience.",
    image: "/images/photos/card2.webp",
    rows: [
      {
        title: "See what drives your performance",
        text: "Monitor sales, attendance, merchandise, marketing and fan feedback through connected dashboards.",
        mock: "chart"
      },
      {
        title: "Get answers from your data",
        text: "Build custom reports, compare periods and use AI to explore results and identify useful observations.",
        mock: "ai"
      },
      {
        title: "Create with AI that knows your organization",
        text: "Draft content, define audiences and summarize feedback using your brand guidance and shared knowledge.",
        mock: "message"
      }
    ],
    groups: [
      {
        title: "Business & Event Performance",
        items: [
          "Revenue totals",
          "Order counts",
          "Ticket sales",
          "Attendance & gate activity",
          "Average order value",
          "Ticket sell-through",
          "Available inventory",
          "Sales goals",
          "Season performance"
        ]
      },
      {
        title: "Financial & Merchandise Reporting",
        items: [
          "Sales & payment reporting",
          "Taxes & fees",
          "Refunds & outstanding balances",
          "Staff-attributed sales",
          "Product sales",
          "Variant sales",
          "Merchandise returns",
          "Product costs",
          "Gross profit & margins"
        ]
      },
      {
        title: "Marketing & Fan Feedback Analytics",
        items: [
          "Campaign engagement",
          "Attributed revenue",
          "Promotion redemptions",
          "Recorded acquisition sources",
          "Cloudflare website traffic metrics",
          "Google Analytics & Meta Pixel integrations",
          "Survey response rates & question results",
          "NPS & ratings",
          "Trends across surveys"
        ]
      },
      {
        title: "Custom Reports & Comparisons",
        items: [
          "Configurable datasets",
          "Report measures",
          "Report filters",
          "Data groupings",
          "Saved reports",
          "CSV exports",
          "Prior-period comparisons",
          "Imported historical event performance",
          "Reporting access & staff permissions"
        ]
      },
      {
        title: "AI Creation & Insights",
        items: [
          "Report drafts from questions",
          "AI observations about report data",
          "Proposed audience segmentation rules",
          "Email drafting",
          "Survey question generation",
          "Bilingual event copy assistance",
          "Survey-response summaries",
          "Recurring themes & sentiment summaries",
          "Image generation & downloads"
        ]
      },
      {
        title: "AI Guidance & Assistants",
        items: [
          "Organization context",
          "Audience guidance",
          "Tone settings",
          "Language settings",
          "Shared operations knowledge",
          "Shared product knowledge",
          "Internal staff guidance",
          "Internal chat assistance",
          "Customer-facing chat widget"
        ]
      }
    ]
  }
];
