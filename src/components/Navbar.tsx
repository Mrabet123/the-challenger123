"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from 'react-icons/fi';
import i18n from "../i18n";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { t } = useTranslation();
  const langMenuRef = useRef<HTMLDivElement>(null);
  const globeBtnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
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

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      router.push(`/?scrollTo=${id}`);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLangMenu = () => setIsLangMenuOpen(open => !open);
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  if (!hasMounted) return null; // Prevent hydration mismatch

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>  
      <div className="nav-container">
        <Link href="/" passHref legacyBehavior>
          <a>
            <img src="/logo.png" alt="Challenger Logo" style={{ maxWidth: 180, cursor: "pointer" }} />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("how-it-works")}>
            {t("navbar.howItWorks")}
          </button>
          <button onClick={() => scrollToSection("for-gen-z")}>
            {t("navbar.whyJoinUs") || "Why Join Us"}
          </button>
          <button onClick={() => router.push("/about")}>
            {t("navbar.aboutUs")}
          </button>
          <button onClick={() => scrollToSection("footer")}>
            {t("navbar.contact")}
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: "auto", position: "relative" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <button
              ref={globeBtnRef}
              onClick={toggleLangMenu}
              aria-label="Select Language"
              className="lang-toggle-btn"
              style={{ zIndex: 2 }}
            >
              <FiGlobe size={25} style={{ marginTop: 6 }} />
            </button>
            {isLangMenuOpen && (
              <div
                className="lang-menu"
                ref={langMenuRef}
                style={{
                  position: "absolute",
                  top: "2.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  minWidth: 160,
                  zIndex: 10,
                }}
              >
                <button
                  onClick={() => changeLang("en")}
                  className="lang-option"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="/americanFlag.svg"
                    alt="US Flag"
                    style={{ width: 20, height: 20, marginRight: 8, verticalAlign: "middle" }}
                  />
                  English
                </button>
                <button
                  onClick={() => changeLang("it")}
                  className="lang-option"
                  style={{ display: "flex", alignItems: "center" }}
                >
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
          {/* Show waitlist button only on desktop */}
          <button
            className="waitlist-btn desktop-only"
            onClick={() => router.push("/waitlist")}
          >
            {t("navbar.joinWaitlist")}
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <button
              className="close-mobile-menu"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              &times;
            </button>
            <button onClick={() => scrollToSection("how-it-works")}>{t("navbar.howItWorks")}</button>
            <button onClick={() => scrollToSection("for-gen-z")}>{t("navbar.whyJoinUs") || "Why Join Us"}</button>
            <button onClick={() => router.push("/about")}>{t("navbar.aboutUs")}</button>
            <button onClick={() => scrollToSection("footer")}>{t("navbar.contact")}</button>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <button
                className="waitlist-btn"
                style={{ marginTop: "1.5rem" }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("/waitlist");
                }}
              >
                {t("navbar.joinWaitlist")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
