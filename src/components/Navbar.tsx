"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from 'react-icons/fi';
import i18n from "../i18n";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t } = useTranslation();
  const langMenuRef = useRef<HTMLDivElement>(null);
  const globeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isLangMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node) &&
        globeBtnRef.current &&
        !globeBtnRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleLangMenu = () => setIsLangMenuOpen(open => !open);
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>  
      <div className="nav-container">
        <img src="/logo.png" alt="Challenger Logo" style={{ maxWidth: 180 }} />

        <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <button onClick={() => scrollTo("how-it-works")}>{t("navbar.howItWorks")}</button>
          <button onClick={() => scrollTo("why-gen-z")}>{t("navbar.whyGenZ")}</button>
          <button onClick={() => scrollTo("benefits")}>{t("navbar.benefits")}</button>
          <button onClick={() => scrollTo("early-access")}>{t("navbar.earlyAccess")}</button>
          <button onClick={() => scrollTo("forms")}>{t("navbar.forms")}</button>
          <button onClick={() => scrollTo("contact")}>{t("navbar.contact")}</button>
        </div>

        <div className="nav-actions">
          <button
            ref={globeBtnRef}
            onClick={toggleLangMenu}
            aria-label="Select Language"
            className="lang-toggle-btn"
          >
  <FiGlobe size={25} style={{ marginTop: 6 }} />
          </button>
          {isLangMenuOpen && (
            <div className="lang-menu" ref={langMenuRef}>
              <button onClick={() => i18n.changeLanguage("en")} className="lang-option" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/americanFlag.svg"
                  alt="US Flag"
                  style={{ width: 20, height: 20, marginRight: 8, verticalAlign: "middle" }}
                />
                English
              </button>
              <button onClick={() => i18n.changeLanguage("it")} className="lang-option" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/italianFlag.svg"
                  alt="IT Flag"
                  style={{ width: 20, height: 20, marginRight: 8, verticalAlign: "middle" }}
                />
                Italiano
              </button>
            </div>
          )}
        </div>

        <div
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;