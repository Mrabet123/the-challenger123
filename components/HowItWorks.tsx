"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

type RoleKey = "challenger" | "vendor" | "ambassador";

const ROLES: { key: RoleKey; emoji: string; labelKey: string }[] = [
  { key: "challenger", emoji: "🧑‍🎤", labelKey: "howItWorks.tabs.challenger" },
  { key: "vendor",     emoji: "🏪",     labelKey: "howItWorks.tabs.vendor" },
  { key: "ambassador", emoji: "🌟",     labelKey: "howItWorks.tabs.ambassador" },
];

const HowItWorks = () => {
  const { t } = useTranslation();
  const [activeRole, setActiveRole] = useState<RoleKey>("challenger");

  const steps: Record<RoleKey, { icon: string; title: string; description: string }[]> = {
    challenger: [
      { icon: "🔍", title: t("howItWorks.challenger.step1Title"), description: t("howItWorks.challenger.step1Desc") },
      { icon: "🎯", title: t("howItWorks.challenger.step2Title"), description: t("howItWorks.challenger.step2Desc") },
      { icon: "🏆", title: t("howItWorks.challenger.step3Title"), description: t("howItWorks.challenger.step3Desc") },
    ],
    vendor: [
      { icon: "🏠", title: t("howItWorks.vendor.step1Title"), description: t("howItWorks.vendor.step1Desc") },
      { icon: "💰", title: t("howItWorks.vendor.step2Title"), description: t("howItWorks.vendor.step2Desc") },
      { icon: "📣", title: t("howItWorks.vendor.step3Title"), description: t("howItWorks.vendor.step3Desc") },
    ],
    ambassador: [
      { icon: "📲", title: t("howItWorks.ambassador.step1Title"), description: t("howItWorks.ambassador.step1Desc") },
      { icon: "🏠", title: t("howItWorks.ambassador.step2Title"), description: t("howItWorks.ambassador.step2Desc") },
      { icon: "🚀", title: t("howItWorks.ambassador.step3Title"), description: t("howItWorks.ambassador.step3Desc") },
    ],
  };

  const scrollToForm = (role: RoleKey) => {
    // 1) Update hash so Forms picks up and switches tab
    window.location.hash = `${role}-form`;

    // 2) Scroll to the forms section container
    const formsSection = document.getElementById("forms");
    if (formsSection) {
      formsSection.scrollIntoView({ behavior: "smooth" });
      // 3) After a pause, scroll into the specific form card
      setTimeout(() => {
        const specificForm = document.getElementById(`${role}-form`);
        specificForm?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  };

  const currentRole = ROLES.find((r) => r.key === activeRole)!;
  const applyText = `${t("buttons.apply")} ${t(currentRole.labelKey)}`;

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">{t("section.howItWorks")}</h2>

        <div
          className="hiw-tabs"
          style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32 }}
        >
          {ROLES.map((role) => (
            <button
              key={role.key}
              className={`hiw-tab${activeRole === role.key ? " active" : ""}`}
              onClick={() => setActiveRole(role.key)}
            >
              <span style={{ fontSize: "1.5rem", marginRight: 8 }}>{role.emoji}</span>
              {t(role.labelKey)}
            </button>
          ))}
        </div>

        <div className="steps-grid">
          {steps[activeRole].map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <button onClick={() => scrollToForm(activeRole)} className="apply-btn">
            {applyText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
