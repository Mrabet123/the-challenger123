"use client"

import { useState } from "react"
import "../src/App.css"

// Components
import Navbar from "../src/components/Navbar"
import HeroCarousel from "../src/components/HeroCarousel"
import HowItWorks from "../src/components/HowItWorks"
import LifestyleBenefits from "../src/components/LifestyleBenefits"
import EarlyAccess from "../src/components/EarlyAccess"
import Forms from "../src/components/Forms"
import Footer from "../src/components/Footer"
import ThankYouModal from "../src/components/ThankYouModal"
import ForGenZ from "../src/components/ForGenZ"
import WhyJoinUs from "../src/components/WhyJoinUs"

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
      <ForGenZ />
      <WhyJoinUs />
      <LifestyleBenefits />
      <EarlyAccess />
      <Forms onFormSubmit={handleFormSubmit} />
      <Footer />
      {showModal && <ThankYouModal message={modalMessage} onClose={() => setShowModal(false)} />}
    </div>
  )
}