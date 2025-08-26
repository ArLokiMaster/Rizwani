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
            Terms & Conditions — Rizwani Solutions
          </h1>
          <p className="text-white/70 max-w-2xl">
            These Terms & Conditions govern your use of our website and our professional services, including web, mobile, AI, and cloud solutions. By accessing our website or engaging us, you agree to these Terms.
          </p>
        </header>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
          <h2>1. Definitions</h2>
          <p>
            “We”, “Us”, “Our” means Rizwani Solutions. “You”, “Client” means the person or entity purchasing services. “Services” means design, development, consulting, and support work we perform. “Deliverables” means outputs like code, designs, documents, and configurations.
          </p>

          <h2>2. Scope, Proposals, and Acceptance</h2>
          <p>
            We provide a written proposal or quote describing scope, timeline, and fees. Your acceptance (email approval, signature, or initial payment) forms the basis of the agreement. Items not explicitly listed are out of scope and require a written change request.
          </p>

          <h2>3. Project Process and Client Responsibilities</h2>
          <ul>
            <li>Provide timely access to information, assets, accounts, and approvals.</li>
            <li>Nominate a single point of contact for decisions and feedback.</li>
            <li>Respond to review requests within the agreed timeframe to avoid delays.</li>
            <li>Ensure all content and assets you supply are lawful and properly licensed.</li>
          </ul>

          <h2>4. Estimates, Fees, and Payments</h2>
          <ul>
            <li>Fees may be fixed-price, milestone-based, or time-and-materials, as stated in the proposal.</li>
            <li>Invoices are due per the schedule stated (commonly 50% upfront, balance on delivery or milestones).</li>
            <li>Late payments may incur suspension of work and/or a late fee/interest as permitted by law.</li>
            <li>Third-party costs (e.g., domains, hosting, licenses, APIs, cloud usage) are billed separately unless otherwise stated.</li>
          </ul>

          <h2>5. Changes and Additional Work</h2>
          <p>
            Changes requested after approval may affect scope, budget, and timeline. We will issue a written change order for your approval before proceeding with additional work.
          </p>

          <h2>6. Deliverables and Acceptance</h2>
          <p>
            On completion of each milestone or final delivery, you will have an acceptance period to test and confirm. If issues are reported within this period, we will address them according to the agreed scope. Absent timely feedback, deliverables are deemed accepted.
          </p>

          <h2>7. Intellectual Property</h2>
          <ul>
            <li>Upon full payment, ownership of project-specific deliverables transfers to you unless otherwise agreed.</li>
            <li>Our pre-existing materials, frameworks, and internal libraries remain our property. We grant you a license to use them as necessary for the deliverables.</li>
            <li>Open-source components remain governed by their original licenses.</li>
          </ul>

          <h2>8. Confidentiality</h2>
          <p>
            Both parties will keep confidential information secret and use it only to fulfill the project. This obligation survives termination. Public marketing references are permitted unless you expressly prohibit them in writing.
          </p>

          <h2>9. Data Protection and Privacy</h2>
          <p>
            We process personal data in accordance with applicable data protection laws. Our <a href="/privacy">Privacy Policy</a> explains how we collect, use, and safeguard data. You are responsible for your own compliance (e.g., obtaining consents, providing notices) for data you control.
          </p>

          <h2>10. Acceptable Use</h2>
          <p>
            You must not use our website or services for unlawful activities, malware, infringement, spamming, or activities that disrupt networks or systems. We may suspend services for suspected abuse.
          </p>

          <h2>11. Third‑Party Services</h2>
          <p>
            We may integrate third‑party services or SDKs. Their availability, pricing, and terms are controlled by the third party. We are not liable for third‑party outages or changes.
          </p>

          <h2>12. Warranties</h2>
          <ul>
            <li>We warrant that services will be provided with reasonable skill and care.</li>
            <li>Except as expressly stated, services and deliverables are provided “as is” without other warranties.</li>
          </ul>

          <h2>13. Support and Maintenance</h2>
          <p>
            Unless specified, ongoing support/maintenance is not included post‑launch. We offer support plans covering incident response, updates, monitoring, and optimizations. Response/SLAs are defined per plan.
          </p>

          <h2>14. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, neither party is liable for indirect, incidental, consequential, special, or punitive damages, or loss of profits, revenue, or data. Our aggregate liability under these Terms is limited to the fees paid by you for the specific services giving rise to the claim in the 3 months preceding the claim.
          </p>

          <h2>15. Indemnity</h2>
          <p>
            You agree to indemnify and hold us harmless against claims arising from your content, misuse of the services, or violation of these Terms or applicable law.
          </p>

          <h2>16. Term and Termination</h2>
          <ul>
            <li>Either party may terminate for material breach if not cured within 14 days of written notice.</li>
            <li>Upon termination, you will pay for work performed up to the termination date and any committed third‑party costs.</li>
            <li>Sections intended to survive (e.g., confidentiality, IP, limitations) shall survive termination.</li>
          </ul>

          <h2>17. Non‑Solicitation</h2>
          <p>
            During the project and for 6 months after, you agree not to solicit for employment any of our personnel directly involved in the project, without our prior written consent.
          </p>

          <h2>18. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of Sri Lanka. Disputes will first be attempted to be resolved amicably. Failing that, disputes shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
          </p>

          <h2>19. Force Majeure</h2>
          <p>
            Neither party is liable for delays or failures due to events beyond reasonable control (e.g., natural disasters, outages, war, governmental actions).
          </p>

          <h2>20. Miscellaneous</h2>
          <ul>
            <li>Entire Agreement: These Terms and the accepted proposal constitute the entire agreement.</li>
            <li>Severability: If any provision is unenforceable, the remainder remains in effect.</li>
            <li>Assignment: You may not assign obligations without our consent; we may assign in connection with reorganization or sale.</li>
            <li>Notices: Official notices must be in writing and sent to the contacts specified in the proposal or via our website contact details.</li>
          </ul>

          <h2>21. Updates to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our website or services after changes take effect constitutes acceptance of the updated Terms.
          </p>

          <p className="text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </main>
  );
}
