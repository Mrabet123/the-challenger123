"use client"

import { useState } from "react"
import "../styles/globals.css"

// Components
import Navbar from "@/components/Navbar"
import HeroCarousel from "@/components/HeroCarousel"
import HowItWorks from "@/components/HowItWorks"
import WhyGenZ from "@/components/WhyGenZ"
import LifestyleBenefits from "@/components/LifestyleBenefits"
import EarlyAccess from "@/components/EarlyAccess"
import Forms from "@/components/Forms"
import Footer from "@/components/Footer"
import ThankYouModal from "@/components/ThankYouModal"

export default function Page() {
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  const handleFormSubmit = (formType: string) => {
    setModalMessage(`Thank you for joining The Challenger as a ${formType}! We'll be in touch soon.`)
    setShowModal(true)
  }

  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <HowItWorks />
      <WhyGenZ />
      <LifestyleBenefits />
      <EarlyAccess />
      <Forms onFormSubmit={handleFormSubmit} />
      <Footer />
      {showModal && <ThankYouModal message={modalMessage} onClose={() => setShowModal(false)} />}
    </div>
  )
}