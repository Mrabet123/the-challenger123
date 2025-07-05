"use client"

import React, { useState, useEffect, FormEvent } from "react"
import { useTranslation } from "react-i18next"

const SHEETS_WEBHOOK_URL =
"https://script.google.com/macros/s/AKfycbxH3fx6sFH8PDD-gQTpSUNsy0qkvL8h6F7z9LB0tRk-HwWs0gtuHBvT4vkAQpYJDthHEg/exec"
interface FormsProps {
  onFormSubmit: (formType: string) => void
}

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation()
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(60,0,90,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #fff 80%, #e9d7fa 100%)",
          padding: "2.7rem",
          borderRadius: "2rem",
          boxShadow: "0 12px 40px rgba(149,77,230,0.22)",
          textAlign: "center",
          maxWidth: 400,
          minWidth: 290,
          border: "3px solid #954de6",
          animation: "popIn 0.4s cubic-bezier(.68,-0.55,.27,1.55)",
        }}
      >
        <div style={{ fontSize: "3.5rem", marginBottom: ".5rem" }}>🎊🥳🎉</div>
        <h2 style={{ color: "#954de6", marginBottom: "1rem" }}>
          {t("modal.successTitle")}
        </h2>
        <p style={{ color: "#4b2067", marginBottom: "1.7rem" }}>
          {t("modal.successMessage")} ✨
        </p>
        <button
          onClick={onClose}
          style={{
            padding: ".9rem 2.5rem",
            borderRadius: "1rem",
            background: "linear-gradient(90deg, #954de6 60%, #7c3aed)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.15rem",
            cursor: "pointer",
          }}
        >
          💜 {t("modal.close")}
        </button>
        <style>{`
          @keyframes popIn {
            0% { transform: scale(0.7); opacity: 0; }
            80% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  )
}

const Spinner = () => (
  <span
    style={{
      display: "inline-block",
      width: "1.5em",
      height: "1.5em",
      border: "3px solid #fff",
      borderTop: "3px solid #954de6",
      borderRadius: "50%",
      animation: "spin 0.7s linear infinite",
      verticalAlign: "middle",
      marginRight: "0.5em"
    }}
  />
);

const Forms: React.FC<FormsProps> = ({ onFormSubmit }) => {
  const { t } = useTranslation()
  const [activeForm, setActiveForm] = useState<"challenger" | "vendor" | "ambassador">("challenger")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // shared POST + logging + modal
  const postToSheet = async (form: HTMLFormElement) => {
    setLoading(true)
    setMessage(null)

    const fd = new FormData(form)
    const payload: Record<string, any> = {}
    fd.forEach((value, key) => {
      payload[key] = value
    })
    console.log("Submitting:", payload)

    try {
      const resp = await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        body: fd,
      })
      const data = await resp.json()
      if (data.status === "success") {
        setShowSuccessModal(true)
        form.reset()
      } else {
        throw new Error(data.message || "Submission failed")
      }
    } catch (err: any) {
      console.error(err)
      setMessage({ text: "Error: " + err.message, isError: true })
    } finally {
      setLoading(false)
    }
  }

  // handlers
  const handleChallengerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postToSheet(e.currentTarget)
  }
  const handleVendorSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postToSheet(e.currentTarget)
  }
  const handleAmbassadorSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postToSheet(e.currentTarget)
  }

  // sync from URL hash
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "")
      if (h === "challenger-form") setActiveForm("challenger")
      else if (h === "vendor-form") setActiveForm("vendor")
      else if (h === "ambassador-form") setActiveForm("ambassador")
    }
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  return (
    <>
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}

      <section id="forms" className="forms-section">
        <div className="container">
          <h2 className="section-title">{t("forms.title")}</h2>
          <div className="form-tabs">
            <button
              className={`tab ${activeForm === "challenger" ? "active" : ""}`}
              onClick={() => setActiveForm("challenger")}
            >
              {t("forms.tabs.challenger")}
            </button>
            <button
              className={`tab ${activeForm === "vendor" ? "active" : ""}`}
              onClick={() => setActiveForm("vendor")}
            >
              {t("forms.tabs.vendor")}
            </button>
            <button
              className={`tab ${activeForm === "ambassador" ? "active" : ""}`}
              onClick={() => setActiveForm("ambassador")}
            >
              {t("forms.tabs.ambassador")}
            </button>
          </div>

          <div className="forms-container">
            {activeForm === "challenger" && (
              <form
                id="challenger-form"
                className="form-card"
                onSubmit={handleChallengerSubmit}
              >
                <input type="hidden" name="formType" value="Challenger" />
                <h3>{t("forms.challenger.title")}</h3>
                <div className="form-row">
                  <input
                    name="Name"
                    type="text"
                    placeholder={t("forms.challenger.name")}
                    required
                  />
                  <input
                    name="Email"
                    type="email"
                    placeholder={t("forms.challenger.email")}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    name="Phone"
                    type="tel"
                    placeholder={t("forms.challenger.phone")}
                    required
                  />
                  <input
                    name="Age"
                    type="number"
                    placeholder={t("forms.challenger.age")}
                    min={16}
                    max={30}
                    required
                  />
                </div>
                <input
                  name="Location"
                  type="text"
                  placeholder={t("forms.challenger.location")}
                  required
                />
                <input
                  name="Types"
                  type="text"
                  placeholder={t("forms.challenger.types")}
                />
                <select name="Hear" required>
                  <option value="">{t("forms.challenger.hear")}</option>
                  <option value="social">{t("forms.challenger.hear_social")}</option>
                  <option value="friend">{t("forms.challenger.hear_friend")}</option>
                  <option value="online">{t("forms.challenger.hear_online")}</option>
                  <option value="event">{t("forms.challenger.hear_event")}</option>
                </select>
                <label className="checkbox-label">
                  <input name="Agree" type="checkbox" required />
                  {t("forms.challenger.agree")}
                </label>
                <button
                  type="submit"
                  className="submit-btn purple"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : t("forms.challenger.submit")}
                </button>
              </form>
            )}

            {activeForm === "vendor" && (
              <form
                id="vendor-form"
                className="form-card"
                onSubmit={handleVendorSubmit}
              >
                <input type="hidden" name="formType" value="Vendor" />
                <h3>{t("forms.vendor.title")}</h3>
                <div className="form-row">
                  <input
                    name="BusinessName"
                    type="text"
                    placeholder={t("forms.vendor.business")}
                    required
                  />
                  <input
                    name="VATNumber"
                    type="text"
                    placeholder={t("forms.vendor.vat")}
                    required
                  />
                </div>
                <input
                  name="VenueType"
                  type="text"
                  placeholder={t("forms.vendor.venue")}
                  required
                />
                <div className="form-row">
                  <input
                    name="ContactPerson"
                    type="text"
                    placeholder={t("forms.vendor.contact")}
                    required
                  />
                  <input
                    name="Email"
                    type="email"
                    placeholder={t("forms.vendor.email")}
                    required
                  />
                </div>
                <input
                  name="Phone"
                  type="tel"
                  placeholder={t("forms.vendor.phone")}
                  required
                />
                <textarea
                  name="Address"
                  placeholder={t("forms.vendor.address")}
                  required
                />
                <select name="Footfall" required>
                  <option value="">{t("forms.vendor.footfall")}</option>
                  <option value="0-100">{t("forms.vendor.footfall_0_100")}</option>
                  <option value="100-500">{t("forms.vendor.footfall_100_500")}</option>
                  <option value="500-1000">{t("forms.vendor.footfall_500_1000")}</option>
                  <option value="1000+">{t("forms.vendor.footfall_1000")}</option>
                </select>
                <input
                  name="Challenges"
                  type="text"
                  placeholder={t("forms.vendor.challenges")}
                />
                <input
                  name="PreferredTimes"
                  type="text"
                  placeholder={t("forms.vendor.days")}
                />
                <label className="checkbox-label">
                  <input
                    name="AgreeTerms"
                    type="checkbox"
                    value="yes"
                    required
                  />
                  {t("forms.vendor.agree")}
                </label>
                <button
                  type="submit"
                  className="submit-btn orange"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : t("forms.vendor.submit")}
                </button>
              </form>
            )}

            {activeForm === "ambassador" && (
              <form
                id="ambassador-form"
                className="form-card"
                onSubmit={handleAmbassadorSubmit}
              >
                <input type="hidden" name="formType" value="Ambassador" />
                <h3>{t("forms.ambassador.title")}</h3>
                <div className="form-row">
                  <input
                    name="FullName"
                    type="text"
                    placeholder={t("forms.ambassador.name")}
                    required
                  />
                  <input
                    name="Email"
                    type="email"
                    placeholder={t("forms.ambassador.email")}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    name="Phone"
                    type="tel"
                    placeholder={t("forms.ambassador.phone")}
                    required
                  />
                  <select name="AgeRange" required>
                    <option value="">{t("forms.ambassador.age")}</option>
                    <option value="18-22">{t("forms.ambassador.age_18_22")}</option>
                    <option value="23-26">{t("forms.ambassador.age_23_26")}</option>
                    <option value="27-30">{t("forms.ambassador.age_27_30")}</option>
                  </select>
                </div>
                <input
                  name="Location"
                  type="text"
                  placeholder={t("forms.ambassador.location")}
                  required
                />
                <div className="form-row">
                  <input
                    name="LinkedIn"
                    type="url"
                    placeholder={t("forms.ambassador.linkedin")}
                  />
                  <input
                    name="Instagram"
                    type="url"
                    placeholder={t("forms.ambassador.instagram")}
                  />
                </div>
                <input
                  name="TikTok"
                  type="url"
                  placeholder={t("forms.ambassador.tiktok")}
                />
                <textarea
                  name="PromotionPlan"
                  placeholder={t("forms.ambassador.promote")}
                  required
                />
                <textarea
                  name="Experience"
                  placeholder={t("forms.ambassador.experience")}
                />
                <input
                  name="Resources"
                  type="text"
                  placeholder={t("forms.ambassador.resources")}
                />
                <label className="checkbox-label">
                  <input
                    name="AgreeCommission"
                    type="checkbox"
                    value="yes"
                    required
                  />
                  {t("forms.ambassador.agree")}
                </label>
                <button
                  type="submit"
                  className="submit-btn yellow"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : t("forms.ambassador.submit")}
                </button>
              </form>
            )}

            {message && (
              <div
                className={`mt-4 p-3 rounded ${
                  message.isError ? "bg-red-500" : "bg-green-500"
                } text-white`}
              >
                {message.text}
              </div>
            )}
          </div>
        </div>
      </section>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export default Forms
