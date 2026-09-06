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
  title: "TimesOut — Tasks, with time built in.",
  description:
    "TimesOut is a task management app for Apple platforms with focus sessions, timers, and deep system integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jetbrainsMono.variable} ${caveat.variable}`} data-scroll-behavior="smooth">
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
