"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
                            ["🎯", "💸", "🌍 ", "🚀"][idx]
                        }
                      </div>
                      <div className="benefit-text">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

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