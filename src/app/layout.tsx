import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCtaBar from "@/components/MobileCtaBar";
import { site } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Quran Tutoring – Learn Quran Online with Certified Tutors",
    template: "%s | Quran Tutoring",
  },
  description: site.description,
  keywords: [
    "online Quran classes",
    "learn Quran online",
    "Quran tutor online",
    "online Quran academy",
    "Quran with Tajweed",
    "Hifz Quran online",
    "Quran memorization course",
    "Noorani Qaida online",
    "Islamic studies online",
    "Arabic language course online",
    "female Quran tutor online",
    "Quran classes for kids",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon-32.png",
    apple: "/images/favicon-192.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Quran Tutoring – Learn Quran Online with Certified Tutors",
    description: site.description,
    images: [
      {
        url: "/images/hero-online-class.jpg",
        width: 1200,
        height: 800,
        alt: "Student attending an online Quran class with Quran Tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Tutoring – Learn Quran Online with Certified Tutors",
    description: site.description,
    images: ["/images/hero-online-class.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/hero-online-class.jpg`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressCountry: site.country,
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
    areaServed: "Worldwide",
    availableLanguage: ["English", "Arabic", "Urdu"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCtaBar />
      </body>
    </html>
  );
}
