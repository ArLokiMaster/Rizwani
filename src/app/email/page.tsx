import React from "react";
import ContactAck from "@/app/email/ContactAck";
import Logo from "./assets/Brand Logo.png";

const page = () => {
  return (
    <div
      style={{
        fontFamily:
          "Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <ContactAck
          firstName="ABU"
          message={
            "Hello!\n\nThank you for reaching out to Rizwani Solutions. We've received your message and our team will reply within 1–2 business days."
          }
          siteName="Rizwani Solutions"
          siteUrl={process.env.NEXT_PUBLIC_SITE_URL || ""}
          logoUrl={Logo.src}
        />
      </div>
    </div>
  );
};

export default page;
