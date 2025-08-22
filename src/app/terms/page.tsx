import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using Rizwani Solutions' services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "Terms of Service — Rizwani Solutions",
    description: "Legal terms governing your use of our website and services.",
  },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-black via-[#0B0B0C] to-black text-white">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 space-y-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs text-white/70">
            TERMS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-white/70 max-w-2xl">
            These terms govern your use of our website and services. By accessing or using our services, you agree to these terms.
          </p>
        </header>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
          <h2>1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these terms.
          </p>

          <h2>2. Quotes, Billing and Payments</h2>
          <p>
            Pricing and scope will be communicated via proposals or quotes. Payments are due as specified in invoices.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            Unless otherwise stated, project deliverables are transferred upon full payment. Our underlying tooling and libraries remain our property.
          </p>

          <h2>4. Confidentiality</h2>
          <p>
            We will keep your confidential information secure and use it only to perform our obligations.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for indirect or consequential damages.
          </p>

          <h2>6. Changes</h2>
          <p>
            We may update these terms from time to time. Continued use constitutes acceptance of the updated terms.
          </p>

          <p className="text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </main>
  );
}
