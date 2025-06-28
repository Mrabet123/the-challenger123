"use client"

import React, { useState, useEffect, FormEvent } from "react"
import { useTranslation } from "react-i18next"

const SHEETS_WEBHOOK_URL =
"https://script.google.com/macros/s/AKfycbzdqxJsQY4ZcHyeMCGiNKuhzrN_tY1pc4e8dqZnDsJD8ziAz-In-lcCkMWFO2B_o84Ksg/exec"
interface FormsProps {
  onFormSubmit: (formType: string) => void
}

const Forms: React.FC<FormsProps> = ({ onFormSubmit }) => {
  const { t } = useTranslation()
  const [activeForm, setActiveForm] = useState<"challenger" | "vendor" | "ambassador">("challenger")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  // Generic tab-click handler
  const handleSubmit = (e: FormEvent, formType: string) => {
    e.preventDefault()
    onFormSubmit(formType)
  }

  // Challenger form POST to Google Sheets
  const handleChallengerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload: Record<string, any> = {}

    fd.forEach((value, key) => {
      payload[key] = value
    })

    try {
      const resp = await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        body: fd,
      })
      const data = await resp.json()
      // ...existing code...
if (data.status === "success") {
  setMessage({ text: "Thank you! Your submission was received.", isError: false });
  form.reset();
} else {
  throw new Error(data.message || "Submission failed");
}
    } catch (err: any) {
      console.error(err)
      setMessage({ text: "Error: " + err.message, isError: true })
    } finally {
      setLoading(false)
    }
  }

  // Sync active tab with URL hash
  useEffect(() => {
    const setFormFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash === "challenger-form") setActiveForm("challenger")
      else if (hash === "vendor-form") setActiveForm("vendor")
      else if (hash === "ambassador-form") setActiveForm("ambassador")
    }
    setFormFromHash()
    window.addEventListener("hashchange", setFormFromHash)
    return () => window.removeEventListener("hashchange", setFormFromHash)
  }, [])

  return (
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
            <>
              <form
                id="challenger-form"
                className="form-card"
                onSubmit={handleChallengerSubmit}
              >
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
                  {loading
                    ? t("forms.challenger.submitting")
                    : t("forms.challenger.submit")}
                </button>
              </form>

              {message && (
                <div
                  className={`mt-4 p-3 rounded ${
                    message.isError
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </>
          )}

          {/* Vendor Form */}
          {activeForm === "vendor" && (
            <form
              id="vendor-form"
              className="form-card"
              onSubmit={(e) => handleSubmit(e, "Vendor")}
            >
              <h3>Vendor Onboarding</h3>
              <div className="form-row">
                <input
                  name="BusinessName"
                  type="text"
                  placeholder="Business Name"
                  required
                />
                <input
                  name="VATNumber"
                  type="text"
                  placeholder="VAT Number"
                  required
                />
              </div>
              <input
                name="VenueType"
                type="text"
                placeholder="Venue Type (Pizzeria, Bar, Gym...)"
                required
              />
              <div className="form-row">
                <input
                  name="ContactPerson"
                  type="text"
                  placeholder="Contact Person"
                  required
                />
                <input
                  name="Email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <input
                name="Phone"
                type="tel"
                placeholder="Phone Number"
                required
              />
              <textarea
                name="Address"
                placeholder="Venue Address"
                required
              ></textarea>
              <select name="Footfall" required>
                <option value="">Average Weekly Footfall</option>
                <option value="0-100">0-100 people</option>
                <option value="100-500">100-500 people</option>
                <option value="500-1000">500-1000 people</option>
                <option value="1000+">1000+ people</option>
              </select>
              <input
                name="Challenges"
                type="text"
                placeholder="Challenges Interested In"
              />
              <input
                name="PreferredTimes"
                type="text"
                placeholder="Preferred Days/Times"
              />
              <label className="checkbox-label">
                <input
                  name="AgreeTerms"
                  type="checkbox"
                  value="yes"
                  required
                />I agree to the vendor terms and conditions
              </label>
              <button type="submit" className="submit-btn orange">
                Apply as Vendor
              </button>
            </form>
          )}

          {/* Ambassador Form */}
          {activeForm === "ambassador" && (
            <form
              id="ambassador-form"
              className="form-card"
              onSubmit={(e) => handleSubmit(e, "Ambassador")}
            >
              <h3>Ambassador Application</h3>
              <div className="form-row">
                <input
                  name="FullName"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  name="Email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  name="Phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <select name="AgeRange" required>
                  <option value="">Age Range</option>
                  <option value="18-22">18-22</option>
                  <option value="23-26">23-26</option>
                  <option value="27-30">27-30</option>
                </select>
              </div>
              <input
                name="Location"
                type="text"
                placeholder="Location (City, Country)"
                required
              />
              <div className="form-row">
                <input
                  name="LinkedIn"
                  type="url"
                  placeholder="LinkedIn Profile"
                />
                <input
                  name="Instagram"
                  type="url"
                  placeholder="Instagram Handle"
                />
              </div>
              <input
                name="TikTok"
                type="url"
                placeholder="TikTok Handle"
              />
              <textarea
                name="PromotionPlan"
                placeholder="How will you promote The Challenger?"
                required
              ></textarea>
              <textarea
                name="Experience"
                placeholder="Past marketing/promotion experience"
              ></textarea>
              <input
                name="Resources"
                type="text"
                placeholder="Resources available (followers, network, etc.)"
              />
              <label className="checkbox-label">
                <input
                  name="AgreeCommission"
                  type="checkbox"
                  value="yes"
                  required
                />I agree to commission terms (10% per booking)
              </label>
              <button type="submit" className="submit-btn yellow">
                Apply as Ambassador
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Forms
