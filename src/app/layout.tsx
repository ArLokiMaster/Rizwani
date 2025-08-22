import type { Metadata } from "next";
import { Jost, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/view/Header";
import Footer from "@/components/view/Footer";
import DesktopOnlyCursor from "@/components/Client/DesktopOnlyCursor";

const jost = Jost({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://rizwanisolution.com/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Rizwani Solutions",
    default: "Rizwani Solutions — Custom Software in Sri Lanka",
  },
  description:
    "Rizwani Solutions is Sri Lanka’s #1 freelance and customizable software solutions provider. Web & mobile development, digital marketing, UI/UX, API integration, cloud, and cybersecurity.",
  keywords: [
    "Rizwani Solutions",
    "software development Sri Lanka",
    "freelance developer Sri Lanka",
    "web development",
    "mobile apps",
    "UI/UX",
    "API integration",
    "cloud solutions",
    "cybersecurity",
    "digital marketing",
  ],
  category: "technology",
  authors: [{ name: "Rizwani Solutions" }],
  creator: "Rizwani Solutions",
  publisher: "Rizwani Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Rizwani Solutions",
    title: "Rizwani Solutions — Custom Software in Sri Lanka",
    description:
      "Sri Lanka’s leading freelance and customizable software partner. We build web and mobile apps, integrate APIs, and secure cloud systems.",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Rizwani Solutions",
      },
    ],
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizwani Solutions — Custom Software in Sri Lanka",
    description:
      "Web and mobile development, UI/UX, API integration, cloud, cybersecurity, and digital marketing.",
    images: ["/next.svg"],
    creator: "@rizwanisolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${jost.className} ${poppins.className} ${inter.className} antialiased overflow-x-hidden min-h-screen`}
      >
        <Header />
        {/* Global cursor (desktop only) */}
        <DesktopOnlyCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
