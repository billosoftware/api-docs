// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",

    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Setting Up Your Account", href: "/setting-up-your-account" },
      {
        title: "Navigating The Dashboard",
        href: "/navigating-the-dashboard",
      },
    ],
  },
  {
    title: "Invoices",
    href: "/invoices",
    noLink: true,
    items: [
      { title: "Creating Your First Invoice", href: "/creating-your-first-invoice" },
      { title: "Adding and Managing Line Items", href: "/adding-and-managing-line-items" },
      { title: "Sending Invoices to Clients", href: "/sending-invoices-to-clients" },
      { title: "Understanding Invoice Statuses", href: "/understanding-invoice-statuses" },
      { title: "Using Invoice Templates", href: "/using-invoice-templates" },
      { title: "Set Up Recurring Invoices", href: "/set-up-recurring-invoices" },
    ],
  },
  {
    title: "Quotes",
    href: "/quotes",
    noLink: true,
    items: [
      { title: "Creating and Sending Quotes", href: "/creating-and-sending-quotes" },
      { title: "Converting Quotes to Invoices", href: "/converting-quotes-to-invoices" },
    ],
  },
  {
    title: "Client Management",
    href: "/client-management",
    noLink: true,
    items: [
      { title: "Adding and Managing Clients", href: "/adding-and-managing-clients" },
      { title: "Importing Clients via CSV", href: "/importing-clients-via-csv" },
      { title: "CIS Settings for Clients", href: "/cis-settings-for-clients" },
    ],
  },
  {
    title: "Payments",
    href: "/payments",
    noLink: true,
    items: [
      { title: "Setting Up Stripe Connect", href: "/setting-up-stripe-connect" },
      { title: "Tracking Payments", href: "/tracking-payments" },
    ],
  },
  {
    title: "Construction Industry Scheme",
    href: "/construction-industry-scheme",
    noLink: true,
    items: [
      { title: "Understanding Construction Industry Scheme", href: "/understanding-construction-industry-scheme" },
      { title: "Creating Construction Industry Scheme Invoices", href: "/creating-construction-industry-scheme-invoices" },
    ],
  },
  {
    title: "Reports and Analytics",
    href: "/reports-and-analytics",
    noLink: true,
    items: [{ title: "Understanding Financial Reports", href: "/understanding-financial-reports" }],
  },
  {
    title: "Settings and Customisation",
    href: "/settings-and-customisation",
    noLink: true,
    items: [
      { title: "Profile Settings", href: "/profile-settings" },
      { title: "Business Information", href: "/business-information" },
      { title: "Invoice Defaults", href: "/invoice-defaults" },
    ],
  },
  {
    title: "Troubleshooting",
    href: "/troubleshooting",
    noLink: true,
    items: [
      { title: "Common Issues and Solutions", href: "/common-issues-and-solutions" },
      { title: "Browser Compatibility", href: "/browser-compatibility" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
