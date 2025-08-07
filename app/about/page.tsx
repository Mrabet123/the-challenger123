"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { FaRocket, FaQuoteLeft } from "react-icons/fa";
import Footer from "@/components/Footer";
import { FaLinkedin } from 'react-icons/fa';

// Define TypeScript interfaces
interface TeamMember {
  name: string;
  role: string;
  location: string;
  description: string;
  image: string;
  linkedin?: string; 
}

interface TeamCategory {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

// Team data with TypeScript types


const missionPoints = [1,2,3,4,5].map(i => ({
  emojiKey: `about.mission${i}Emoji`,
  textKey: `about.mission${i}Text`
}));

const valuePoints = [
  { emoji: '🧭', titleKey: 'about.value1Title', subtitleKey: 'about.value1Subtitle' },
  { emoji: '🏆', titleKey: 'about.value2Title', subtitleKey: 'about.value2Subtitle' },
  { emoji: '🔗', titleKey: 'about.value3Title', subtitleKey: 'about.value3Subtitle' },
  { emoji: '🎁', titleKey: 'about.value4Title', subtitleKey: 'about.value4Subtitle' },
  { emoji: '💰', titleKey: 'about.value5Title', subtitleKey: 'about.value5Subtitle' },
  { emoji: '👤', titleKey: 'about.value6Title', subtitleKey: 'about.value6Subtitle' },
];

export default function AboutPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  
  useEffect(() => { setMounted(true); }, []);
  
  if (!mounted) return null;
const teamCategoriesRaw = t('about.teamCategories', { returnObjects: true });
const teamCategories: TeamCategory[] = Array.isArray(teamCategoriesRaw) 
  ? teamCategoriesRaw 
  : [];  const teamImages: Record<string, string> = {
    "Ghassen Mansouri": "/team/Ghassen Mansouri.jpg",
    "Nabil Mansouri": "/team/Nabil Mansouri.jpg",
    "Kardo Sharifi": "/team/Kardo Sharifi.jpg",
     "Rami Ben Ahmed": "/team/Rami Ben Ahmed.jpg",
    "Yassine Mrabet": "/team/yassine.jpg",
    // "Chams Eddine Abderrahim": "/team/chams.jpg",
    "Amanda Martinez": "/team/Amanda Martinez.jpg",
    "Alessia Nikolli": "/team/Alessia Nikolli.jpg",
    "Ottavia Oddone": "/team/Ottavia Oddone.jpg",
    "Mitri Tessera": "/team/Mitri Tessera.jpg",
    "Giorgia Casti": "/team/Giorgia Casti.jpg",
    "Maria Milagaros": "/team/Maria.jpg",
    "Vito": "/team/Vito Borrego.jpg",
    "Luka Devic": "/team/Luka Devic.jpg",
    "Amin Rezazade": "/team/Amin Rezazad.jpg",
    "Mohamed Achref Mannai":"/team/Ashref Manai.jpg",
  "Amin Ben": "/team/Amin Ben.jpg",

  };
  return (
    <>
      <Navbar />
      <main className="about-page" style={{ background: "linear-gradient(120deg, #f0e6fa 0%, #fff 100%)" }}>
        {/* Hero Section */}
        <section className="about-hero" style={{
          background: "linear-gradient(120deg, #954de6 0%, #fc9e4f 100%)",
          color: "#fff",
          padding: "2.2rem 0 2.5rem 0",
          textAlign: "center",
          position: "relative"
        }}>
          <div className="container">
            <p
              className="about-intro"
              style={{ fontSize: "1.45rem", maxWidth: 700, margin: "0 auto 2rem auto", opacity: 0.95, fontWeight: 650 }}
            >
              {t('about.heroText')}
            </p>
            {/* New players cards container */}
<div className="hero-players">
  <div className="player-card">
    <span className="player-emoji">🎯</span>
    <h4 className="player-title">{t('about.heroBulletChallengers').split(':')[0]}</h4>
    <p className="player-text">{t('about.heroBulletChallengers').split(':')[1].trim()}</p>
  </div>
  <div className="player-card">
    <span className="player-emoji">🚀</span>
    <h4 className="player-title">{t('about.heroBulletAmbassadors').split(':')[0]}</h4>
    <p className="player-text">{t('about.heroBulletAmbassadors').split(':')[1].trim()}</p>
  </div>
  <div className="player-card">
    <span className="player-emoji">🏢</span>
    <h4 className="player-title">{t('about.heroBulletVenues').split(':')[0]}</h4>
    <p className="player-text">{t('about.heroBulletVenues').split(':')[1].trim()}</p>
  </div>
</div>
 {/* Network statement above slogan */}
 <p
   className="hero-network"
   style={{
     fontSize: "1.1rem",
     maxWidth: 600,
     margin: "1.5rem auto",
     fontWeight: 600,
     opacity: 0.9,
     color: "#fff",
   }}
 >
   {t("about.heroNetwork")}
 </p>
            <div style={{
              margin: "2.5rem auto 0 auto",
              maxWidth: 600,
              background: "rgba(255,255,255,0.13)",
              borderRadius: "1.5rem",
              padding: "1.5rem 2rem",
              boxShadow: "0 4px 24px rgba(149,77,230,0.10)",
              color: "#fff",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "1.15rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem"
            }}>
              <FaQuoteLeft size={29} style={{ flexShrink: 0, opacity: 0.7 }} />
              <span style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                {t("about.heroQuote")}
              </span>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 0, right: 0, bottom: "-30px",
            height: "60px",
            background: "linear-gradient(180deg,rgba(255,255,255,0.1) 0%,#fff 100%)",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem",
            zIndex: 1
          }} />
        </section>

        {/* Decorative Divider */}
        <div style={{
          width: "100%",
          height: "32px",
          background: "linear-gradient(90deg, #954de6 0%, #fc9e4f 100%)",
          opacity: 0.08,
          margin: "0 0 2rem 0"
        }} />

        {/* Mission Section */}
        <section
          className="about-section mission"
          style={{
            background: "#fff",
            borderRadius: "2rem",
            boxShadow: "0 2px 16px rgba(149,77,230,0.06)",
            margin: "2rem auto",
            maxWidth: 1000,
            padding: "2.5rem 2rem"
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <FaRocket size={38} color="#954de6" style={{ marginBottom: "1rem" }} />
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              {t("about.missionTitle")}
            </h2>
            <div
              className="mission-cards"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${missionPoints.length}, 1fr)`,
                gap: '1.5rem',
                marginTop: '2rem'
              }}
            >
              {missionPoints.map(({ emojiKey, textKey }, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 2px 16px rgba(149,77,230,0.06)',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>
                    {t(emojiKey)}
                  </span>
                  <p style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.75rem' }}>
                    {t(textKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          className="about-section values"
          style={{
            background: "#fff",
            borderRadius: "2rem",
            boxShadow: "0 2px 16px rgba(149,77,230,0.06)",
            margin: "2rem auto",
            maxWidth: 1300,
            padding: "2.5rem 2rem"
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              {t("about.valuesTitle")}
            </h2>
            <div
              className="values-cards"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${valuePoints.length}, 1fr)`,
                gap: '1.5rem',
                marginTop: '2rem'
              }}
            >
              {valuePoints.map(({ emoji, titleKey, subtitleKey }, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 2px 16px rgba(149,77,230,0.06)',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{emoji}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.75rem' }}>
                    {t(titleKey)}
                  </h3>
                  <p style={{ fontSize: '0.95rem', opacity: 0.8, marginTop: '0.5rem' }}>
                    {t(subtitleKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section team" style={{
          margin: "2rem auto 0 auto",
          maxWidth: 1200,
          padding: "2.5rem 0"
        }}>
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
              {t("about.teamTitle")}
            </h2>
            
            {teamCategories.map((category, catIndex) => (
              <div key={catIndex} style={{ marginBottom: "3.5rem" }}>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#954de6",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                  position: "relative",
                  paddingBottom: "0.5rem"
                }}>
                  {category.title}
                  {category.subtitle && (
                    <span style={{
                      display: "block",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "#666",
                      marginTop: "0.3rem"
                    }}>
                      {category.subtitle}
                    </span>
                  )}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "3px",
                    background: "linear-gradient(90deg, #954de6 0%, #fc9e4f 100%)",
                    borderRadius: "2px"
                  }}></div>
                </h3>
                
                <div className="team-grid" style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "2rem",
                }}>
                  {category.members.map((member, idx) => (
                    <div
                      className="team-member-card"
                      key={`${catIndex}-${idx}`}
                      onMouseEnter={() => setHoveredMember(member)}
                      onMouseLeave={() => setHoveredMember(null)} // <-- add this line
                      style={{
                        background: "#fff",
                        borderRadius: "1.5rem",
                        boxShadow: hoveredMember?.name === member.name 
                          ? "0 8px 32px rgba(149,77,230,0.18)" 
                          : "0 4px 24px rgba(149,77,230,0.10)",
                        padding: "1.8rem 1.2rem 1.5rem 1.2rem",
                        textAlign: "center",
                        transition: "transform 0.18s, box-shadow 0.18s",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                        transform: hoveredMember?.name === member.name ? "translateY(-6px)" : "none",
                        zIndex: hoveredMember?.name === member.name ? 10 : 1
                      }}
                    >
                      <div className="team-photo" style={{
                        marginBottom: "1.2rem",
                        position: "relative"
                      }}>
                        <Image
                          src={teamImages[member.name] || "/team/default.jpg"}
                          alt={member.name}
                          width={120}
                          height={120}
                          style={{
                            borderRadius: "50%",
                            objectFit: "contain",
                            border: "4px solid #fc9e4f",
                            boxShadow: "0 2px 12px rgba(252,158,79,0.13)"
                          }}
                        />
                        <div style={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          width: 32,
                          height: 32,
                          background: "linear-gradient(135deg, #954de6 60%, #fc9e4f 100%)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          boxShadow: "0 2px 8px rgba(149,77,230,0.10)"
                        }}>
                          {member.name.split(" ")[0][0]}
                        </div>
                      </div>
                      <div className="team-info">
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.3rem", color: "#954de6" }}>
                          {member.name}
                        </h3>
                        <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#22223b", marginBottom: "0.5rem" }}>
                          {member.role}
                        </h4>
                        <p style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic" }}>
                          {member.location}
                        </p>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>
        
        {/* Member Detail Panel */}
        {hoveredMember && (
          <div className="member-detail-panel" style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
            padding: "2rem",
            zIndex: 100,
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
            maxWidth: "1000px",
            margin: "0 auto",
            transform: "translateY(0)",
            borderTop: "4px solid #954de6"
          }}>
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              maxWidth: "900px",
              margin: "0 auto"
            }}>
              <div style={{ flexShrink: 0 }}>
                <Image
                  src={teamImages[hoveredMember.name] || "/team/default.jpg"}
                  alt={hoveredMember.name}
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    objectFit: "contain",
                    border: "3px solid #fc9e4f"
                  }}
                />
              </div>
              
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#954de6", marginBottom: "0.5rem" }}>
                  {hoveredMember.name}
                </h3>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <span style={{
                    background: "rgba(149,77,230,0.1)",
                    color: "#954de6",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "1rem",
                    fontWeight: 600,
                    fontSize: "0.9rem"
                  }}>
                    {hoveredMember.role}
                  </span>
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.9rem",
                    color: "#666"
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {hoveredMember.location}
                  </span>
                </div>
                <p style={{ lineHeight: "1.6", color: "#444" }}>
                  {hoveredMember.description}
                </p>
                {/* inside the hoveredMember panel JSX, after the description */}
{hoveredMember.linkedin && (
  <div style={{ marginTop: "1rem" }}>
    <Link
      href={hoveredMember.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "#0A66C2",
        fontWeight: 600
      }}
    >
      <FaLinkedin size={20} />
     {t("buttons.linkedinProfile")}
    </Link>
  </div>
)}

              </div>
              <button 
                onClick={() => setHoveredMember(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#954de6"
                }}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </main>
      
      {/* Additional CSS for hover effects */}
      <style jsx global>{`
        .team-member-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .member-detail-panel {
          animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 1.5rem !important;
          }
          
          .member-detail-panel {
            padding: 1.5rem;
            max-width: 100%;
          }
          
          .member-detail-panel > div {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
	  	<Footer/>
    </>
  );
}