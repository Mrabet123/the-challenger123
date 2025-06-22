import { useTranslation } from "react-i18next"

const LifestyleBenefits = () => {
  const { t } = useTranslation()
  const benefits = t("lifestyleBenefits.benefits", { returnObjects: true }) as Array<{ title: string; desc: string; color: string }>

  // Add colors in code since they're not in translation
  const colors = ["purple", "navy", "purple", "navy"]

  return (
    <section id="benefits" className="lifestyle-benefits">
      <div className="container">
        <h2 className="section-title">{t("lifestyleBenefits.title")}</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`benefit-card ${colors[index]}`}>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LifestyleBenefits
