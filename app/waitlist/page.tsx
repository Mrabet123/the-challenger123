"use client"

import { useTranslation } from "react-i18next"
import { useState } from "react"
import Forms from "@/components/Forms"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function WaitlistPage() {
  const { t } = useTranslation();
  const [submittedType, setSubmittedType] = useState<string | null>(null);

  const handleFormSubmit = (formType: string) => {
    setSubmittedType(formType);
  }

  return (
    <>
      <Navbar />
      {/* Form Section */}
      <section id="forms" className="forms-section">
        <Forms onFormSubmit={handleFormSubmit} />
      </section>
      {/* Footer Section */}
      <Footer />
    </>
  )
}
