import { useState } from "react"
import { useTranslation } from "react-i18next"

type RoleKey = "challenger" | "vendor" | "ambassador";

const ROLES: { key: RoleKey; emoji: string; labelKey: string }[] = [
  { key: "challenger", emoji: "🧑‍🎤", labelKey: "howItWorks.tabs.challenger" },
  { key: "vendor", emoji: "🏪", labelKey: "howItWorks.tabs.vendor" },
  { key: "ambassador", emoji: "🌟", labelKey: "howItWorks.tabs.ambassador" },
];

const HowItWorks = () => {
  const { t } = useTranslation();
  const [activeRole, setActiveRole] = useState<RoleKey>("challenger");

  const steps: Record<RoleKey, { icon: string; title: string; description: string }[]> = {
    challenger: [
      {
        icon: "🔍",
        title: t("howItWorks.challenger.step1Title"),
        description: t("howItWorks.challenger.step1Desc"),
      },
      {
        icon: "🎯",
        title: t("howItWorks.challenger.step2Title"),
        description: t("howItWorks.challenger.step2Desc"),
      },
      {
        icon: "🏆",
        title: t("howItWorks.challenger.step3Title"),
        description: t("howItWorks.challenger.step3Desc"),
      },
    ],
    vendor: [
      {
        icon: "📢",
        title: t("howItWorks.vendor.step1Title"),
        description: t("howItWorks.vendor.step1Desc"),
      },
      {
        icon: "🤝",
        title: t("howItWorks.vendor.step2Title"),
        description: t("howItWorks.vendor.step2Desc"),
      },
      {
        icon: "💰",
        title: t("howItWorks.vendor.step3Title"),
        description: t("howItWorks.vendor.step3Desc"),
      },
    ],
    ambassador: [
      {
        icon: "📲",
        title: t("howItWorks.ambassador.step1Title"),
        description: t("howItWorks.ambassador.step1Desc"),
      },
      {
        icon: "🚀",
        title: t("howItWorks.ambassador.step2Title"),
        description: t("howItWorks.ambassador.step2Desc"),
      },
      {
        icon: "🏅",
        title: t("howItWorks.ambassador.step3Title"),
        description: t("howItWorks.ambassador.step3Desc"),
      },
    ],
  };

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">{t("section.howItWorks")}</h2>
        <div
          className="hiw-tabs"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {ROLES.map((role) => (
            <button
              key={role.key}
              className={`hiw-tab${activeRole === role.key ? " active" : ""}`}
              onClick={() => setActiveRole(role.key)}
              style={{
                padding: "1rem 2rem",
                borderRadius: "2rem",
                border: "none",
                background: activeRole === role.key ? "#954de6" : "#fff",
                color: activeRole === role.key ? "#fff" : "#954de6",
                fontWeight: 700,
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: activeRole === role.key
                  ? "0 4px 16px rgba(149,77,230,0.13)"
                  : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{role.emoji}</span>
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
      </div>
    </section>
  );
};

export default HowItWorks;
