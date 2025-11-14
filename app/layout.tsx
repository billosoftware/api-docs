import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import { Libre_Baskerville } from "next/font/google";
import { Figtree } from "next/font/google";
import Script from "next/script";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-default-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billoinvoicing.com"),
  title: {
    default: "Billo Invoicing Help Center - Documentation & Guides",
    template: "%s | Billo Invoicing Help",
  },
  description: "Comprehensive help center and documentation for Billo Invoicing. Learn how to create invoices, manage clients, track payments, and streamline your invoicing workflow.",
  keywords: [
    "Billo Invoicing",
    "invoice software",
    "invoicing help",
    "invoice documentation",
    "invoice management",
    "client management",
    "payment tracking",
    "recurring invoices",
    "invoice templates",
    "CIS invoices",
    "construction industry scheme",
    "Stripe integration",
    "online invoicing",
  ],
  authors: [{ name: "Billo Software" }],
  creator: "Billo Software",
  publisher: "Billo Software",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://billoinvoicing.com",
    siteName: "Billo Invoicing Help Center",
    title: "Billo Invoicing Help Center - Documentation & Guides",
    description: "Comprehensive help center and documentation for Billo Invoicing. Learn how to create invoices, manage clients, track payments, and streamline your invoicing workflow.",
    images: [
      {
        url: "/public-og.png",
        width: 1200,
        height: 630,
        alt: "Billo Invoicing Help Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billo Invoicing Help Center - Documentation & Guides",
    description: "Comprehensive help center and documentation for Billo Invoicing.",
    images: ["/public-og.png"],
    creator: "@billoinvoicing",
  },
  alternates: {
    canonical: "https://billoinvoicing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async strategy="afterInteractive" id="google-analytics" src="https://www.googletagmanager.com/gtag/js?id=G-P05MZVJ5H7" />
        <Script id="google-analytics2" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          
          gtag("config", "G-P05MZVJ5H7");
        `}
        </Script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Billo Invoicing" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#009966" />
        <meta name="algolia-site-verification"  content="1D4273021539BADC" />
      </head>
      <body className={` ${libreBaskerville.variable} ${figtree.variable} `} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
