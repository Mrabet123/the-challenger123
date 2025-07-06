"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ForGenZ from "./ForGenZ";

type RoleKey = "genz" | "business" | "ambassador";

const ROLES: { key: RoleKey; labelKey: string }[] = [
  { key: "genz", labelKey: "navbar.whyJoinUs" },
  { key: "business", labelKey: "whyJoinUs.tabs.businessOwners" },
  { key: "ambassador", labelKey: "whyJoinUs.tabs.ambassadors" },
];

const WhyJoinUs = () => {
  const { t } = useTranslation();
  const [activeRole, setActiveRole] = useState<RoleKey>("genz");

  // Translation-based reasons
  const businessReasons = t("forBusinesses.reasons", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const ambassadorReasons = t("forAmbassadors.reasons", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section id="why-join-us" className="why-join-us">
      <div className="container">
        <h2 className="section-title">{t("section.whyGenZ").replace("Gen Z", t("section.whyGenZ").split(" ")[1]) /* use correct heading? alternatively t("whyJoinUs.title") */}</h2>
        <div
          className="wj-tabs"
          style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32 }}
        >
          {ROLES.map((role) => (
            <button
              key={role.key}
              className={`wj-tab${activeRole === role.key ? " active" : ""}`}
              onClick={() => setActiveRole(role.key)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "2rem",
                border: "none",
                background: activeRole === role.key ? "#954de6" : "#fff",
                color: activeRole === role.key ? "#fff" : "#954de6",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {t(role.labelKey)}
            </button>
          ))}
        </div>

        <div className="reasons-grid">
          {activeRole === "genz" && <ForGenZ />}

          {activeRole === "business" && (
            <section id="for-businesses" className="why-gen-z">
              <div className="container">
                <h2 className="section-title">{t("forBusinesses.title")}</h2>
                <div className="reasons-grid">
                  {businessReasons.map((item, idx) => (
                    <div key={idx} className="reason-card">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeRole === "ambassador" && (
            <section id="for-ambassadors" className="why-gen-z">
              <div className="container">
                <h2 className="section-title">{t("forAmbassadors.title")}</h2>
                <div className="reasons-grid">
                  {ambassadorReasons.map((item, idx) => (
                    <div key={idx} className="reason-card">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
