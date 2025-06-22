import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="/logo.png"
              alt="Challenger Logo"
              className="section-logo"
              style={{ maxWidth: 180, display: "block" }}
            />
            <p>{t("footer.built")}</p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Instagram">📱</a>
            <a href="#" aria-label="TikTok">🎵</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
