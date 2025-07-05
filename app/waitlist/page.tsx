"use client"

import { useTranslation } from "react-i18next"

export default function WaitlistPage() {
  const { t } = useTranslation();

  return (
    <main className="waitlist-page" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: "2rem", boxShadow: "0 4px 20px rgba(149,77,230,0.13)", padding: "3rem 2rem", maxWidth: 480, width: "100%", textAlign: "center" }}>
        <h1 style={{ color: "#954de6", marginBottom: "1.5rem" }}>{t("waitlist.title")}</h1>
        <p style={{ marginBottom: "2rem" }}>{t("waitlist.desc")}</p>
        <a href="#forms" className="waitlist-btn" style={{ textDecoration: "none" }}>
          {t("waitlist.cta")}
        </a>
      </div>
    </main>
  )
}