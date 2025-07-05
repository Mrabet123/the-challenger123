"use client"

import { useState, useEffect } from "react"
import "../src/App.css"

// Components
import Navbar from "../src/components/Navbar"
import HeroCarousel from "../src/components/HeroCarousel"
import HowItWorks from "../src/components/HowItWorks"
import ForGenZ from "../src/components/ForGenZ"
import ForBusinesses from "../src/components/ForBusinesses"
import ForAmbassadors from "../src/components/ForAmbassadors"
import LifestyleBenefits from "../src/components/LifestyleBenefits"
import EarlyAccess from "../src/components/EarlyAccess"
import Brochure from "../src/components/Brochure"
import Forms from "../src/components/Forms"
import Footer from "../src/components/Footer"
import ThankYouModal from "../src/components/ThankYouModal"

export default function Page() {
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  const handleFormSubmit = (formType: string) => {
    setModalMessage(`Thank you for joining The Challenger as a ${formType}! We'll be in touch soon.`)
    setShowModal(true)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const scrollTo = params.get("scrollTo");
      if (scrollTo) {
        setTimeout(() => {
          const el = document.getElementById(scrollTo);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <HowItWorks />
      <ForGenZ />
      <ForBusinesses />
      <ForAmbassadors />
      <LifestyleBenefits />
      <Brochure />
      <EarlyAccess />
      <Forms onFormSubmit={handleFormSubmit} />
      <Footer />
      {showModal && <ThankYouModal message={modalMessage} onClose={() => setShowModal(false)} />}
    </div>
  )
}
