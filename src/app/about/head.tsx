import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rizwani Solutions — Mission, Values, and Expertise",
  description:
    "We are Sri Lanka’s leading custom software partner delivering web, mobile, UI/UX, API integrations, cloud, cybersecurity, and marketing.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Rizwani Solutions — Mission, Values, and Expertise",
    description:
      "We are Sri Lanka’s leading custom software partner delivering web, mobile, UI/UX, API integrations, cloud, cybersecurity, and marketing.",
    images: [{ url: "/next.svg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rizwani Solutions — Mission, Values, and Expertise",
    description:
      "We are Sri Lanka’s leading custom software partner delivering web, mobile, UI/UX, API integrations, cloud, cybersecurity, and marketing.",
    images: [{ url: "/next.svg", width: 1200, height: 630 }],
  },
};

export default function Head() {
  const title = "About Rizwani Solutions — Mission, Values, and Expertise";
  const description =
    "We are Sri Lanka’s leading custom software partner delivering web, mobile, UI/UX, API integrations, cloud, cybersecurity, and marketing.";
  const url = "/about";
  const image = "/next.svg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
