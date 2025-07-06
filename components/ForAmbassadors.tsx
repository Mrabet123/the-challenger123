import { useTranslation } from "react-i18next"

const ForAmbassadors = () => {
  const { t } = useTranslation()
  const reasons = t("forAmbassadors.reasons", { returnObjects: true }) as Array<{ title: string; desc: string; gradient: string }>

  const gradients = ["yellow-blue", "blue-purple", "purple-orange", "orange-yellow"]

  return (
    <section id="for-ambassadors" className="why-gen-z">
      <div className="container">
        <h2 className="section-title">{t("forAmbassadors.title")}</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className={`reason-card ${gradients[index % gradients.length]}`}>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForAmbassadors