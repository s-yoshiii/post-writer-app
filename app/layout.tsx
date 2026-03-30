import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

const geistSans = GeistSans;

const geistMono = GeistMono;

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind", "shadcn/ui"],
  authors: [{ name: "s.yoshii", url: siteConfig.url }],
  openGraph: {
    type: "website",
    locale: "ja",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/ogp.png`],
    creator: "s.yoshiii",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          notoSansJP.variable,
          "antialiased"
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
