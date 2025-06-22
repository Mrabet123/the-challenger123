"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { t } = useTranslation()

  const slides = [
    {
      type: "challenger",
      headline: t("heroCarousel.challengerHeadline"),
      subhead: t("heroCarousel.challengerSubhead"),
      cta: t("heroCarousel.challengerCTA"),
      background: "/placeholder.svg?height=600&width=1200",
    },
    {
      type: "vendor",
      headline: t("heroCarousel.vendorHeadline"),
      subhead: t("heroCarousel.vendorSubhead"),
      cta: t("heroCarousel.vendorCTA"),
      background: "/placeholder.svg?height=600&width=1200",
    },
    {
      type: "ambassador",
      headline: t("heroCarousel.ambassadorHeadline"),
      subhead: t("heroCarousel.ambassadorSubhead"),
      cta: t("heroCarousel.ambassadorCTA"),
      background: "/placeholder.svg?height=600&width=1200",
    },
  ]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, slides.length])

  const scrollToForm = (formType: string) => {
    window.location.hash = `#${formType}-form`;

    const element = document.getElementById("forms");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const formElement = document.getElementById(`${formType}-form`);
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 500);
    }
  };

  return (
    <section className="hero-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""} ${slide.type}`}
          style={{ backgroundImage: index === 0 ? undefined : `url(${slide.background})` }}
        >
          {slide.type === "challenger" && (
            <video
              className="hero-bg-video"
              src="/videos/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            />
          )}
          {slide.type === "vendor" && (
            <img
              className="hero-bg-video"
              src="/img42.jpg"
              alt="Vendor Background"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            />
          )}
          {slide.type === "ambassador" && (
            <img
              className="hero-bg-video"
              src="/img2.jpg"
              alt="Ambassador Background"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            />
          )}
          <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
            <h1 className="hero-headline">{slide.headline}</h1>
            <p className="hero-subhead">{slide.subhead}</p>
            <button
              className={`hero-cta ${
                slide.type === "challenger"
                  ? "purple"
                  : slide.type === "vendor"
                  ? "orange"
                  : "yellow"
              }`}
              onClick={() => scrollToForm(slide.type)}
            >
              {slide.cta}
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(23, 37, 90, 0.4)",
              zIndex: 1,
            }}
          />
        </div>
      ))}

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
