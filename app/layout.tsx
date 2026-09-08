import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClickSpark from "@/app/components/ClickSpark";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFCF9",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://timesoutapp.vercel.app"),
  title: {
    default: "TimesOut — Aesthetic Daily Planner & To-Do Task Manager",
    template: "%s | TimesOut",
  },
  description:
    "TimesOut is an aesthetic daily planner and task manager for iPhone and Apple devices. Plan your day with focus countdown timers, Lock Screen Live Activities, interactive widgets, and private iCloud sync.",
  keywords: [
    "TimesOut",
    "TimesOut app",
    "aesthetic task manager",
    "daily planner app",
    "to-do list with timer",
    "focus countdown timer",
    "pomodoro focus timer",
    "ADHD routine planner",
    "iOS task manager",
    "Live Activities timer",
    "Dynamic Island task timer",
    "Apple interactive widgets",
    "time blocking app",
  ],
  authors: [{ name: "TimesOut" }],
  alternates: {
    canonical: "https://timesoutapp.vercel.app",
  },
  openGraph: {
    title: "TimesOut — Aesthetic Daily Planner & To-Do Task Manager",
    description:
      "Plan your day and crush your goals with focus timers, Lock Screen Live Activities, and interactive widgets.",
    url: "https://timesoutapp.vercel.app",
    siteName: "TimesOut",
    images: [
      {
        url: "/screenshots/cover-hero.jpeg",
        width: 1170,
        height: 2532,
        alt: "TimesOut — Aesthetic Daily Planner & Task Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimesOut — Aesthetic Daily Planner & To-Do Task Manager",
    description:
      "Plan your day with focus timers, Lock Screen Live Activities, and interactive widgets.",
    images: ["/screenshots/cover-hero.jpeg"],
  },
  verification: {
    google: "google5729bbeb3d7099a1",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://timesoutapp.vercel.app/#app",
      "name": "TimesOut: Daily Planner & ToDo",
      "alternateName": ["TimesOut", "TimesOut App"],
      "headline": "Aesthetic Daily Planner & Task Manager with Focus Timers",
      "operatingSystem": "iOS, iPadOS, macOS, watchOS",
      "applicationCategory": "ProductivityApplication",
      "description":
        "TimesOut is an aesthetic daily planner and task manager for Apple platforms with focus timers, Lock Screen Live Activities, widgets, and private iCloud sync.",
      "image": "https://timesoutapp.vercel.app/screenshots/cover-hero.jpeg",
      "url": "https://timesoutapp.vercel.app",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "author": {
        "@type": "Person",
        "name": "Arihant Marwaha",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://timesoutapp.vercel.app/#website",
      "name": "TimesOut",
      "url": "https://timesoutapp.vercel.app",
      "description":
        "Official website of TimesOut — Aesthetic Daily Planner & Task Manager with Focus Timers.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClickSpark
          sparkColor="#F47C62"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={500}
        >
          <Header />
          {children}
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
