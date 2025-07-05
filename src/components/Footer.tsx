import { useTranslation } from "react-i18next"
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6"

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
              <a href="/faqs">{t("footer.faqs")}</a>
            </li>
            <li>
              <a href="/terms">{t("footer.terms")}</a>
            </li>
            <li>
              <a href="/privacy">{t("footer.privacy")}</a>
            </li>
          </ul>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/contact">{t("footer.contact")}</a>
            </li>
            <li>
              <a href="/partner">{t("footer.partner")}</a>
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
            <a href="mailto:ghassenmansouri@mail.com">ghassenmansouri@mail.com</a>
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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-icon"
            >
              <FaLinkedin />
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
