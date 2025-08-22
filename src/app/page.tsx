import type { Metadata } from "next";
import LandingHomePage from "@/app/Landing/page";

export const metadata: Metadata = {
  title: "Custom Software Development in Sri Lanka",
  description:
    "Rizwani Solutions builds high‑quality web and mobile apps, delivers UI/UX, API integrations, cloud, cybersecurity, and digital marketing.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Rizwani Solutions — Custom Software in Sri Lanka",
    description:
      "Leading freelance and customizable software partner for web, mobile, and cloud.",
    images: [{ url: "/next.svg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizwani Solutions — Custom Software in Sri Lanka",
    description:
      "Leading freelance and customizable software partner for web, mobile, and cloud.",
    images: [{ url: "/next.svg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <LandingHomePage />;
}
