import { useTranslation } from "react-i18next"
import { FaLinkedin, FaInstagram, FaTiktok,FaFacebook } from "react-icons/fa6"
import Link from "next/link"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer" id="footer">
      <div className="footer-content" style={{ flexWrap: "wrap", gap: 32 }}>
        <div className="footer-logo" style={{ minWidth: 220 }}>
          <img
            src="/logo.png"
            alt="The Challenger Logo"
            style={{ maxWidth: 160, marginBottom: 8 }}
          />
          <p className="footer-brand-desc">
            <span style={{ fontWeight: 700 }}>The Challenger – </span>
            " {t("footer.brandDesc1")}
            <br />
            {t("footer.brandDesc2")} "
          </p>
        </div>
        <div className="footer-links" style={{ display: "flex", gap: 48 }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/about">{t("footer.about")}</a>
            </li>
            <li>
              <Link href="/ComingSoon">{t("footer.faqs")}</Link>
            </li>
            <li>
              <Link href="/ComingSoon">{t("footer.terms")}</Link>
            </li>
            <li>
              <Link href="/ComingSoon">{t("footer.privacy")}</Link>
            </li>
          </ul>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link href="/ComingSoon">{t("footer.contact")}</Link>
            </li>
            <li>
              <Link href="/ComingSoon">{t("footer.partner")}</Link>
            </li>
            <li>
              <a href="/waitlist">{t("footer.joinWaitlist")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact" style={{ minWidth: 220 }}>
          <div style={{ marginBottom: 8 }}>
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            <a href="mailto:ghassen.mansouri@challenzee.com">ghassen.mansouri@challenzee.com</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <span role="img" aria-label="whatsapp">
              📞
            </span>{" "}
            <a
              href="https://wa.me/393792306809"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +39 379 230 6809
            </a>
          </div>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="footer-social-icon"
            >
              <FaTiktok />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom"
        style={{ marginTop: 24, fontSize: "0.95rem" }}
      >
        © 2024 The Challenger. {t("footer.copyright")}
      </div>
    </footer>
  )
}

export default Footer