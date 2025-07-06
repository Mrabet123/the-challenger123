import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

const ForGenZ = () => {
  const { t } = useTranslation()
  const [reasons, setReasons] = useState<Array<{ title: string; desc: string }>>([])

  // Add gradients in code since they're not in translation
  const gradients = ["purple-orange", "orange-yellow", "yellow-blue", "blue-purple"]

  useEffect(() => {
    // Only run on client
    setReasons(t("forGenZ.reasons", { returnObjects: true }) as Array<{ title: string; desc: string }>)
  }, [t])

  return (
    <section id="for-gen-z" className="why-gen-z">
      <div className="container">
        <h2 className="section-title">{t("forGenZ.title")}</h2>
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

export default ForGenZ
