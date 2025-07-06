"use client"
import { useTranslation } from "react-i18next"

const EarlyAccess = () => {
  const { t } = useTranslation()
  const scrollToForms = () => {
    const element = document.getElementById("forms")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="early-access" className="early-access">
      <div className="container">
        <h2 className="section-title">{t("earlyAccess.title")}</h2>
        <div className="badges-container">
          <div className="badge">
            <span className="badge-icon">💰</span>
            <span className="badge-text">{t("earlyAccess.discount")}</span>
          </div>
          <div className="badge">
            <span className="badge-icon">🤝</span>
            <span className="badge-text">{t("earlyAccess.commission")}</span>
          </div>
        </div>
        <button className="cta-button orange" onClick={scrollToForms}>
          {t("earlyAccess.cta")}
        </button>
      </div>
    </section>
  )
}

export default EarlyAccess
