import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
  Font,
} from "@react-email/components";

export type ContactAckProps = {
  siteName?: string;
  siteUrl?: string;
  logoUrl?: string;
  firstName: string;
  message: string;
};

export default function ContactAck({
  siteName = "Rizwani Solutions",
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  logoUrl = "/next.svg",
  firstName,
  message,
}: ContactAckProps) {
  return (
    <Html>
      <Preview>We received your message — {siteName}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                sans: ["Inter", "Arial", "sans-serif"],
                heading: ["Poppins", "Helvetica", "sans-serif"],
              },
              colors: {
                slate: {
                  50: "#f8fafc",
                  100: "#f1f5f9",
                  200: "#e2e8f0",
                  500: "#64748b",
                  600: "#475569",
                  800: "#1f2937",
                },
                neutral: { 900: "#111827" },
                brand: { 600: "#111827" },
              },
              borderRadius: { xl: "12px", "2xl": "16px" },
            },
          },
        }}
      >
        <Head>
          {/* Load Fonts */}
          <Font
            fontFamily="Poppins"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap",
              format: "woff2",
            }}
          />
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Arial"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
              format: "woff2",
            }}
          />
          {/* Mobile tweaks */}
          <style>
            {`
          @media (max-width: 600px) {
            .container {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .stack-cols .col {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              margin-bottom: 16px !important;
            }
            .cta-btn {
              display: block !important;
              width: 100% !important;
              text-align: center !important;
            }
            .center-sm {
              text-align: center !important;
            }
            img {
              max-width: 100% !important;
              height: auto !important;
            }
          }
        `}
          </style>
        </Head>

        <Body className="bg-slate-50 py-12 font-sans">
          <Container className="mx-auto w-full max-w-[560px] rounded-2xl bg-white shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
            {/* Logo */}
            <Section className="px-8 pt-10 text-center">
              <Img
                src={logoUrl}
                alt={`${siteName} logo`}
                width={160}
                className="mx-auto"
              />
            </Section>

            {/* CEO Section */}
            <Section className="px-8 pt-6">
              <Row className="stack-cols">
                <Column className="align-top col" width={48}>
                  <Img
                    src={`${siteUrl}/next.svg`}
                    width={48}
                    height={48}
                    alt="Profile"
                    className="rounded-full"
                  />
                </Column>
                <Column className="col">
                  <Text className="m-0 text-[13px] font-semibold text-neutral-900 font-heading">
                    From CEO
                  </Text>
                  <Text className="m-0 text-[12px] text-slate-600 font-sans">
                    ABU – Founder of Rizwani Solutions
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Message */}
            <Section className="px-8 pt-6">
              <Text className="m-0 mb-4 text-[14px] leading-7 text-neutral-900 font-sans">
                Hello 👋,
              </Text>
              <Text className="m-0 mb-4 text-[14px] leading-7 text-slate-600 font-sans">
                Thank you for reaching out to Rizwani Solution. We’ve received
                your message and our team will review it carefully. You can
                expect a reply within 1–2 business days.
              </Text>

              <Section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <Text className="m-0 mb-2 text-[12px] text-slate-500 font-sans">
                  Your message that we received
                </Text>
                <Text className="m-0 whitespace-pre-wrap text-[14px] text-neutral-900 font-sans center-sm">
                  {message}
                </Text>
              </Section>
            </Section>

            {/* Values */}
            <Section className="px-8 pt-6">
              <Text className="mx-auto my-6 text-center text-[16px] font-semibold text-neutral-900 font-heading">
                Here’s what you can always expect from us
              </Text>
              <Row className="stack-cols">
                <Column className="col">
                  <Section className="text-center px-2">
                    <Img
                      src={`${siteUrl}/globe.svg`}
                      width={36}
                      height={36}
                      alt="Growth"
                      className="mx-auto"
                    />
                    <Text className="mt-3 text-[12px] font-semibold text-neutral-900 font-heading">
                      Business Growth
                    </Text>
                    <Text className="m-0 text-[12px] text-slate-600 font-sans">
                      Strategies and tools to scale effectively.
                    </Text>
                  </Section>
                </Column>
                <Column className="col">
                  <Section className="text-center px-2">
                    <Img
                      src={`${siteUrl}/file.svg`}
                      width={36}
                      height={36}
                      alt="Smart"
                      className="mx-auto"
                    />
                    <Text className="mt-3 text-[12px] font-semibold text-neutral-900 font-heading">
                      Smart Solutions
                    </Text>
                    <Text className="m-0 text-[12px] text-slate-600 font-sans">
                      Tailored to your unique challenges.
                    </Text>
                  </Section>
                </Column>
                <Column className="col">
                  <Section className="text-center px-2">
                    <Img
                      src={`${siteUrl}/next.svg`}
                      width={36}
                      height={36}
                      alt="Trust"
                      className="mx-auto"
                    />
                    <Text className="mt-3 text-[12px] font-semibold text-neutral-900 font-heading">
                      Trusted Partnership
                    </Text>
                    <Text className="m-0 text-[12px] text-slate-600 font-sans">
                      Transparent and reliable communication.
                    </Text>
                  </Section>
                </Column>
              </Row>

              <Hr className="border-slate-100 my-10" />
              <Row className="stack-cols center-sm">
                <Column className="col">
                  <Text className="m-0 text-[12px] text-slate-500 font-sans">
                    We’ll get back within 1–2 business days
                  </Text>
                </Column>
                <Column className="text-right col center-sm">
                  <Button
                    href={"https://www.rizwanisolution.com/services"}
                    className="inline-block rounded-full bg-black px-6 py-3 text-[13px] font-medium text-white font-heading cta-btn"
                  >
                    More Services
                  </Button>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section className="bg-slate-50 px-8 py-5 text-center">
              <Text className="mt-3 text-[12px] text-slate-400 text-right font-sans">
                © {new Date().getFullYear()} {siteName}. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
