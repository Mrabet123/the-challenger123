"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

interface FormsProps {
  onFormSubmit: (formType: string) => void
}

const Forms = ({ onFormSubmit }: FormsProps) => {
  const { t } = useTranslation()
  const [activeForm, setActiveForm] = useState("challenger")

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault()
    onFormSubmit(formType)
  }
  useEffect(() => {
    // Check hash on mount and when it changes
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
          <button className={`tab ${activeForm === "challenger" ? "active" : ""}`} onClick={() => setActiveForm("challenger")}>
            {t("forms.tabs.challenger")}
          </button>
          <button className={`tab ${activeForm === "vendor" ? "active" : ""}`} onClick={() => setActiveForm("vendor")}>
            {t("forms.tabs.vendor")}
          </button>
          <button className={`tab ${activeForm === "ambassador" ? "active" : ""}`} onClick={() => setActiveForm("ambassador")}>
            {t("forms.tabs.ambassador")}
          </button>
        </div>
        <div className="forms-container">
          {activeForm === "challenger" && (
            <form id="challenger-form" className="form-card" onSubmit={(e) => handleSubmit(e, "Challenger")}>
              <h3>{t("forms.challenger.title")}</h3>
              <div className="form-row">
                <input type="text" placeholder={t("forms.challenger.name")} required />
                <input type="email" placeholder={t("forms.challenger.email")} required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder={t("forms.challenger.phone")} required />
                <input type="number" placeholder={t("forms.challenger.age")} min="16" max="30" required />
              </div>
              <input type="text" placeholder={t("forms.challenger.location")} required />
              <input type="text" placeholder={t("forms.challenger.types")} />
              <select required>
                <option value="">{t("forms.challenger.hear")}</option>
                <option value="social">{t("forms.challenger.hear_social")}</option>
                <option value="friend">{t("forms.challenger.hear_friend")}</option>
                <option value="online">{t("forms.challenger.hear_online")}</option>
                <option value="event">{t("forms.challenger.hear_event")}</option>
              </select>
              <label className="checkbox-label">
                <input type="checkbox" required />{t("forms.challenger.agree")}
              </label>
              <button type="submit" className="submit-btn purple">
                {t("forms.challenger.submit")}
              </button>
            </form>
          )}

          {/* Vendor Form */}
          {activeForm === "vendor" && (
            <form id="vendor-form" className="form-card" onSubmit={(e) => handleSubmit(e, "Vendor")}>
              <h3>Vendor Onboarding</h3>
              <div className="form-row">
                <input type="text" placeholder="Business Name" required />
                <input type="text" placeholder="VAT Number" required />
              </div>
              <input type="text" placeholder="Venue Type (Pizzeria, Bar, Gym...)" required />
              <div className="form-row">
                <input type="text" placeholder="Contact Person" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Venue Address" required></textarea>
              <select required>
                <option value="">Average Weekly Footfall</option>
                <option value="0-100">0-100 people</option>
                <option value="100-500">100-500 people</option>
                <option value="500-1000">500-1000 people</option>
                <option value="1000+">1000+ people</option>
              </select>
              <input type="text" placeholder="Challenges Interested In" />
              <input type="text" placeholder="Preferred Days/Times" />
              <label className="checkbox-label">
                <input type="checkbox" required />I agree to the vendor terms and conditions
              </label>
              <button type="submit" className="submit-btn orange">
                Apply as Vendor
              </button>
            </form>
          )}

          {/* Ambassador Form */}
          {activeForm === "ambassador" && (
            <form id="ambassador-form" className="form-card" onSubmit={(e) => handleSubmit(e, "Ambassador")}>
              <h3>Ambassador Application</h3>
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone Number" required />
                <select required>
                  <option value="">Age Range</option>
                  <option value="18-22">18-22</option>
                  <option value="23-26">23-26</option>
                  <option value="27-30">27-30</option>
                </select>
              </div>
              <input type="text" placeholder="Location (City, Country)" required />
              <div className="form-row">
                <input type="url" placeholder="LinkedIn Profile" />
                <input type="url" placeholder="Instagram Handle" />
              </div>
              <input type="url" placeholder="TikTok Handle" />
              <textarea placeholder="How will you promote The Challenger?" required></textarea>
              <textarea placeholder="Past marketing/promotion experience"></textarea>
              <input type="text" placeholder="Resources available (followers, network, etc.)" />
              <label className="checkbox-label">
                <input type="checkbox" required />I agree to commission terms (10% per booking)
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
