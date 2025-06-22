import { useTranslation } from "react-i18next"

const WhyGenZ = () => {
  const { t } = useTranslation()
  const reasons = t("whyGenZ.reasons", { returnObjects: true }) as Array<{ title: string; desc: string; gradient: string }>

  // Add gradients in code since they're not in translation
  const gradients = ["purple-orange", "orange-yellow", "yellow-blue", "blue-purple"]

  return (
    <section id="why-gen-z" className="why-gen-z">
      <div className="container">
        <h2 className="section-title">{t("whyGenZ.title")}</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className={`reason-card ${gradients[index]}`}>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyGenZ
