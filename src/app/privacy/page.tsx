import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Rizwani Solutions collects, uses, and protects your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Privacy Policy — Rizwani Solutions",
    description: "Our commitment to data protection and privacy.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-black via-[#0B0B0C] to-black text-white">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 space-y-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs text-white/70">
            PRIVACY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/70 max-w-2xl">
            Your privacy matters to us. This policy explains what data we collect, how we use it, and your rights.
          </p>
        </header>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We may collect contact details and project information you provide via forms or communications.
          </p>

          <h2>How We Use Information</h2>
          <p>
            To respond to inquiries, deliver services, and improve our offerings. We do not sell your data.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We may share data with trusted processors as needed to provide services. We require appropriate safeguards.
          </p>

          <h2>Security</h2>
          <p>
            We employ reasonable technical and organizational measures to protect your data.
          </p>

          <h2>Your Rights</h2>
          <p>
            You can request access, correction, or deletion of your data by contacting us.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy. We will revise the date below when we do.
          </p>

          <p className="text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </main>
  );
}
