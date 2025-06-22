import { useTranslation } from "react-i18next"

const HowItWorks = () => {
  const { t } = useTranslation()

  const steps = [
    {
      icon: "🔍",
      title: t("howItWorks.step1Title"),
      description: t("howItWorks.step1Desc"),
    },
    {
      icon: "🎯",
      title: t("howItWorks.step2Title"),
      description: t("howItWorks.step2Desc"),
    },
    {
      icon: "🏆",
      title: t("howItWorks.step3Title"),
      description: t("howItWorks.step3Desc"),
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">{t("section.howItWorks")}</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
