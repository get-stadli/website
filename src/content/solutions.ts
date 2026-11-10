// Solution pages: /solutions/<slug>
export type SolutionPage = {
  slug: string;
  name: string;
  summary: string;
  lede: string;
  image: string;
  columns: {
    title: string;
    lede: string;
    items: { title: string; text: string }[];
  }[];
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "sport-teams",
    name: "Stadli for Sport Teams",
    summary: "Ticketing, CRM, marketing and analytics all share the same fan data.",
    lede:
      "Connect ticket sales, season passes, fan relationships and team merchandise across every game. Manage your website, campaigns, payments and stadium admissions from one platform, with shared customer records and staff controls. Use reporting and AI assistance to understand attendance, track revenue and keep supporters engaged throughout the season and beyond.",
    image: "/images/articles/quebec-capitales-choose-stadli.webp",
    columns: [
      {
        title: "Ticketing & Game-Day Operations",
        lede: "Manage every game, from season schedules and ticket sales to stadium entry.",
        items: [
          { title: "Games & seasons", text: "Build schedules, organize seasons and manage game changes." },
          { title: "Stadium seating", text: "Configure seatmaps, sections, accessible seating and game-specific pricing." },
          { title: "Single-game sales & box office", text: "Sell online and at the stadium with interactive seat selection." },
          { title: "Season tickets, bundles & groups", text: "Offer reserved season seats, flexible passes, family packs and group rates." },
          { title: "Payments & ticket service", text: "Manage installments, invoices, refunds, seat moves and ticket reissues." },
          { title: "Game-day admission & credentials", text: "Scan tickets and passes, control gates and manage guest or press access." }
        ]
      },
      {
        title: "Team Website & Commerce",
        lede: "Give supporters one branded destination to find games, buy merchandise and manage tickets.",
        items: [
          { title: "Branded team website", text: "Showcase games, season passes and merchandise with bilingual, editable pages." },
          { title: "Online team store", text: "Sell team apparel and merchandise with sizes, variants and collections." },
          { title: "Inventory & fulfillment", text: "Track stock, receive merchandise, manage returns and configure shipping." },
          { title: "Fan accounts", text: "Let supporters manage purchases, pass balances, receipts and installment payments." },
          { title: "Digital tickets & wallets", text: "Provide digital tickets, transfers and supported Apple or Google Wallet passes." },
          { title: "Promotions & fan offers", text: "Create game-specific discounts, gift cards, quantity offers and purchase incentives." }
        ]
      },
      {
        title: "Fan Engagement & Marketing",
        lede: "Know your fans, fill more seats and keep supporters connected throughout the season.",
        items: [
          { title: "Fan CRM", text: "Connect fan profiles, attendance, purchases, season passes and communication preferences." },
          { title: "Fan segmentation", text: "Build targeted audiences based on attendance, spending and pass ownership." },
          { title: "Email & SMS campaigns", text: "Promote upcoming games, ticket offers and merchandise with targeted messages." },
          { title: "Fan engagement automation", text: "Trigger messages, rewards and follow-ups around purchases, games and milestones." },
          { title: "Fan surveys & feedback", text: "Gather post-game feedback and track the fan experience across the season." },
          { title: "Campaign attribution", text: "Measure engagement and attributed sales to understand which campaigns drive purchases." }
        ]
      },
      {
        title: "Analytics & Team Tools",
        lede: "Track your season’s performance and help your staff make informed decisions.",
        items: [
          { title: "Game & season dashboards", text: "Monitor ticket sales, attendance, pass usage, revenue and merchandise profitability." },
          { title: "Custom reports & comparisons", text: "Build reports and compare performance across games and seasons." },
          { title: "AI assistance", text: "Draft campaigns, translate copy, summarize feedback and explore fan insights." },
          { title: "Chat assistants", text: "Help staff and fans find answers through internal and public assistants." },
          { title: "Staff roles & permissions", text: "Coordinate box office, marketing and gate teams with appropriate access." },
          { title: "Club administration & support", text: "Manage settings, audit history, data imports, backups and support requests." }
        ]
      }
    ]
  },
  {
    slug: "live-events",
    name: "Stadli for Live Events",
    summary: "Fast checkout and mobile tickets designed for the rush before puck drop.",
    lede:
      "Run live events with ticketing, audience marketing, merchandise and event operations connected in one platform. Sell through a branded website, manage payments and admissions, and keep attendee relationships growing between events. Use shared customer records, reporting and AI assistance to coordinate your team and understand what drives attendance and revenue.",
    image: "/images/articles/lakeshore-mariners-third-homestand.webp",
    columns: [
      {
        title: "Ticketing & Event Operations",
        lede: "Everything you need to plan events, sell tickets and welcome attendees.",
        items: [
          { title: "Events & scheduling", text: "Create events, organize series and manage schedule changes." },
          { title: "Venues & seating", text: "Design layouts with reserved seating, general admission and accessible spaces." },
          { title: "Ticket sales & box office", text: "Sell online and on-site with branded checkout and flexible ticket options." },
          { title: "Passes, bundles & groups", text: "Offer multi-event passes, ticket packages, group rates and private offers." },
          { title: "Payments & orders", text: "Manage payments, invoices, deposits, refunds and ticket changes." },
          { title: "Admission & accreditation", text: "Scan tickets, control entry and manage VIP or press access." }
        ]
      },
      {
        title: "Website & Commerce",
        lede: "Give attendees one branded destination to discover, shop and manage their tickets.",
        items: [
          { title: "Branded website", text: "Build bilingual pages featuring your events, products and essential information." },
          { title: "Online merchandise store", text: "Sell products with variants, collections and promotional pricing." },
          { title: "Inventory & fulfillment", text: "Track stock, manage returns and configure shipping options." },
          { title: "Attendee accounts", text: "Let customers access purchases, receipts, profiles and payment details." },
          { title: "Digital tickets & wallets", text: "Provide digital tickets, transfers and supported Apple or Google Wallet passes." },
          { title: "Promotions & gift cards", text: "Create discounts, quantity offers, gift cards and purchase incentives." }
        ]
      },
      {
        title: "Audience & Marketing",
        lede: "Understand your audience, promote your events and give attendees reasons to return.",
        items: [
          { title: "Audience CRM", text: "Connect customer profiles, purchase history, attendance and communication preferences." },
          { title: "Audience segmentation", text: "Build targeted audiences using customer activity, interests and spending." },
          { title: "Email & SMS campaigns", text: "Create, personalize and schedule messages with reusable templates." },
          { title: "Marketing automation", text: "Trigger messages, offers and follow-ups around purchases, attendance and milestones." },
          { title: "Surveys & feedback", text: "Gather attendee feedback with targeted surveys and post-event questionnaires." },
          { title: "Campaign attribution", text: "Track engagement and attributed sales to understand what brings people back." }
        ]
      },
      {
        title: "Insights & Team Management",
        lede: "See how your events perform and give your team the tools to act.",
        items: [
          { title: "Performance dashboards", text: "Monitor sales, attendance, merchandise, pass usage and outstanding balances." },
          { title: "Custom reports & exports", text: "Build reports, compare results and export the data you need." },
          { title: "AI assistance", text: "Draft content, translate messages, summarize feedback and explore audience insights." },
          { title: "Chat assistants", text: "Help staff and attendees find answers through internal and public assistants." },
          { title: "Team roles & permissions", text: "Invite staff and control access based on their responsibilities." },
          { title: "Administration & support", text: "Manage settings, audit logs, migrations, backups and support requests." }
        ]
      }
    ]
  }
];
