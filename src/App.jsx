"use client"

import { useState } from "react"
import "./App.css"

// Components
import Navbar from "./components/Navbar"
import HeroCarousel from "./components/HeroCarousel"
import HowItWorks from "./components/HowItWorks"
import ForGenZ from "./components/ForGenZ"
import ForBusinesses from "./components/ForBusinesses"
import ForAmbassadors from "./components/ForAmbassadors"
import LifestyleBenefits from "./components/LifestyleBenefits"
import EarlyAccess from "./components/EarlyAccess"
import Forms from "./components/Forms"
import Footer from "./components/Footer"
import ThankYouModal from "./components/ThankYouModal"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  const handleFormSubmit = (formType) => {
    setModalMessage(`Thank you for joining The Challenger as a ${formType}! We'll be in touch soon.`)
    setShowModal(true)
  }

  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <HowItWorks />
      <ForGenZ />
      <ForBusinesses />
      <ForAmbassadors />
      <LifestyleBenefits />
      <EarlyAccess />
      <Forms onFormSubmit={handleFormSubmit} />
      <Footer />
      {showModal && <ThankYouModal message={modalMessage} onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default App
