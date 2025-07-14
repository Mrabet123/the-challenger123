"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";

type RoleKey = "genz" | "business" | "ambassador";

const ROLES: { key: RoleKey; labelKey: string }[] = [
  { key: "genz", labelKey: "navbar.whyJoinUs" },
  { key: "business", labelKey: "whyJoinUs.tabs.businessOwners" },
  { key: "ambassador", labelKey: "whyJoinUs.tabs.ambassadors" },
];

const roleImages: Record<RoleKey, string> = {
  genz: "/genz 1.jpg",
  business: "/genz 3.jpg",
  ambassador: "/genz 2.jpg",
};

const WhyJoinUs = () => {
  const { t } = useTranslation();
  const [activeRole, setActiveRole] = useState<RoleKey>("genz");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const roles: RoleKey[] = ["genz", "business", "ambassador"];

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
      setFade(true);
    }, 400); // match CSS transition
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(prev => (prev - 1 + 3) % 3);
      setFade(true);
    }, 400);
  };

  useEffect(() => {
    setActiveRole(roles[currentSlide]);
  }, [currentSlide]);

  const businessReasons = t("forBusinesses.reasons", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const ambassadorReasons = t("forAmbassadors.reasons", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const genzReasons = t("forGenZ.reasons", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section id="why-join-us" className="why-join-us">
      <div className="container">
        <h2 className="section-title">
          {t("whyJoinUs.title", { role: t(`whyJoinUs.tabs.${activeRole}`) })}
        </h2>

        <div className="role-slider-container">
          <div className="role-slider">
            <button className="slider-arrow prev" onClick={prevSlide}>
              <FaArrowLeft />
            </button>

            <div className="slide-content">
              <div className="slide-image">
                <img
                  src={roleImages[activeRole]}
                  alt={activeRole}
                  className={`fade-image${fade ? " visible" : ""}`}
                  style={{
                    width: "100%",
                    borderRadius: "1rem",
                    transition: "opacity 0.4s ease-in-out",
                  }}
                />
              </div>

              <div className="slide-benefits">
                <div className="benefits-grid">
                  {(activeRole === "genz" ? genzReasons :
                    activeRole === "business" ? businessReasons :
                    ambassadorReasons
                  ).map((item, idx) => (
                    <div key={idx} className="benefit-card">
                      <div className="benefit-icon">
                        {
                          activeRole === "genz" ?
                            ["🎁", "👑", "🥇", "💯", "🌍", "🤝"][idx] :
                          activeRole === "business" ?
                            ["💰", "📢", "🛠️", "🛡️", "👣", "🔄"][idx] :
                            ["📣", "🏅", "👑", "🌟"][idx]
                        }
                      </div>
                      <div className="benefit-text">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {activeRole === "ambassador" && (
                  <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <a
                      href="/brochure.pdf"
                      download
                      className="brochure-download-btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.7rem",
                        background: "linear-gradient(90deg, #954de6 0%, #fc9e4f 100%)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        padding: "1rem 2.2rem",
                        borderRadius: "2rem",
                        boxShadow: "0 4px 20px rgba(149,77,230,0.13), 0 2px 8px rgba(252,158,79,0.10)",
                        textDecoration: "none",
                        transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                      }}
                    >
                      <FaDownload size={22} />
                      {t("brochure.button")}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <button className="slider-arrow next" onClick={nextSlide}>
              <FaArrowRight />
            </button>
          </div>

          <div className="slider-dots">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                className={`dot ${currentSlide === dot ? "active" : ""}`}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentSlide(dot);
                    setFade(true);
                  }, 400);
                }}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;