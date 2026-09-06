import type { Metadata } from "next";
import { JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClickSpark from "@/app/components/ClickSpark";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timesoutapp.vercel.app"),
  title: "TimesOut — Tasks, with time built in.",
  description:
    "TimesOut is a task management app for Apple platforms with focus sessions, timers, and deep system integration.",
  keywords: [
    "TimesOut",
    "TimesOut app",
    "TimesOut tasks",
    "task management",
    "focus timer",
    "iOS productivity app",
    "Live Activities timer",
    "Apple widgets task manager",
  ],
  authors: [{ name: "TimesOut" }],
  alternates: {
    canonical: "https://timesoutapp.vercel.app",
  },
  openGraph: {
    title: "TimesOut — Tasks, with time built in.",
    description:
      "TimesOut is a task management app for Apple platforms with focus sessions, timers, and deep system integration.",
    url: "https://timesoutapp.vercel.app",
    siteName: "TimesOut",
    images: [
      {
        url: "/screenshots/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "TimesOut App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimesOut — Tasks, with time built in.",
    description:
      "TimesOut is a task management app for Apple platforms with focus sessions, timers, and deep system integration.",
    images: ["/screenshots/hero.jpeg"],
  },
  verification: {
    google: "google5729bbeb3d7099a1",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TimesOut",
  "operatingSystem": "iOS, iPadOS, macOS, watchOS",
  "applicationCategory": "ProductivityApplication",
  "description":
    "TimesOut is a task management app for Apple platforms with focus sessions, timers, and deep system integration.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jetbrainsMono.variable} ${caveat.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
