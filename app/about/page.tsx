"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import { FaLightbulb, FaUsers, FaRocket, FaSmile, FaQuoteLeft } from "react-icons/fa"

const teamMembers = [
	{
		name: "Ghassen Mansouri",
		role: "Co-Founder & CEO",
		bio: "Empowering Gen Z and building communities through challenges.",
		image: "/team/ghassen.jpg",
	},
	{
		name: "Yassine Mrabet",
		role: "Co-Founder & CTO",
		bio: "Leads the tech vision for seamless, innovative experiences.",
		image: "/team/yassine.jpg",
	},
	{
		name: "Rami Ben Ahmed",
		role: "Head of Community",
		bio: "Connects businesses, ambassadors, and challengers.",
		image: "/team/rami.jpg",
	},
	{
		name: "Luca Neri",
		role: "Marketing Lead",
		bio: "Drives creative campaigns to engage and inspire.",
		image: "/team/luca.jpg",
	},
	{
		name: "Giulia Fontana",
		role: "Product Designer",
		bio: "Designs intuitive, beautiful user experiences.",
		image: "/team/giulia.jpg",
	},
	{
		name: "Elena Russo",
		role: "Growth Manager",
		bio: "Expands our reach and builds strategic partnerships.",
		image: "/team/elena.jpg",
	},
];

const valueIcons = [
	<FaLightbulb key="innovation" color="#fc9e4f" size={28} />,
	<FaUsers key="community" color="#5aa9e6" size={28} />,
	<FaRocket key="empowerment" color="#954de6" size={28} />,
	<FaSmile key="fun" color="#ffb700" size={28} />,
];

export default function AboutPage() {
	const { t } = useTranslation();
	const [mounted, setMounted] = useState(false);
	useEffect(() => { setMounted(true); }, []);
	if (!mounted) return null; // Prevent hydration mismatch
  const keys = [
    "makeFunMeaningful",
    "sparkCompetition",
    "enableConnections",
    "rewardCreativity",
    "supportBusinesses"
  ] as const
const valKeys = [
  "discover",
  "challenge",
  "connect",
  "getRewarded",
  "earn",
  "build"
] as const;
	return (
		<>
			<Navbar />
			<main className="about-page" style={{ background: "linear-gradient(120deg, #f0e6fa 0%, #fff 100%)" }}>
				{/* Hero Section */}
				<section className="about-hero" style={{
					background: "linear-gradient(120deg, #954de6 0%, #fc9e4f 100%)",
					color: "#fff",
					padding: "4rem 0 2.5rem 0",
					textAlign: "center",
					position: "relative"
				}}>
					<div className="container">
						<h1 className="about-title" style={{ fontSize: "2.7rem", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "0.5px" }}>
							{t("about.heroTitle")}
						</h1>
						<p className="about-intro" style={{ fontSize: "1.25rem", maxWidth: 700, margin: "0 auto", opacity: 0.95, fontWeight: 500 }}>
							{t("about.heroText")}
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
				 <section className="about-section mission">
          <div className="container text-center">
            <FaRocket className="mission-icon" />
            <h2 className="section-title">{t("about.missionTitle")}</h2>
            <ul className="mission-grid">
              {keys.map((key) => {
                const { emoji, text } = t(
                  `about.missionPoints.${key}`,
                  { returnObjects: true }
                ) as { emoji: string; text: string }

                return (
                  <li key={key} className="mission-card">
                    <span className="mission-emoji">{emoji}</span>
                    <p className="mission-text">{text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

				{/* Values Section */}
				<section className="about-section values">
  <div className="container text-center">
    <h2 className="section-title">{t("about.valuesTitle")}</h2>
    <ul className="values-grid">
      {valKeys.map((key) => {
        const { icon, title, desc } = t(
          `about.valuesPoints.${key}`,
          { returnObjects: true }
        ) as { icon: string; title: string; desc: string };
        return (
          <li key={key} className="value-card">
            <span className="value-icon">{icon}</span>
            <h3 className="value-title">{title}</h3>
            <p className="value-desc">{desc}</p>
          </li>
        );
      })}
    </ul>
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
						<div className="team-grid" style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
							gap: "2.5rem",
							marginTop: "2.5rem"
						}}>
							{teamMembers.map((member, idx) => (
								<div
									className="team-member-card"
									key={idx}
									style={{
										background: "#fff",
										borderRadius: "1.5rem",
										boxShadow: "0 4px 24px rgba(149,77,230,0.10)",
										padding: "2rem 1.2rem 1.5rem 1.2rem",
										textAlign: "center",
										transition: "transform 0.18s, box-shadow 0.18s",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										position: "relative",
										overflow: "hidden"
									}}
								>
									<div className="team-photo" style={{
										marginBottom: "1.2rem",
										position: "relative"
									}}>
										<Image
											src={member.image}
											alt={member.name}
											width={120}
											height={120}
											style={{
												borderRadius: "50%",
												objectFit: "cover",
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
										<h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.3rem", color: "#954de6" }}>{member.name}</h3>
										<h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#22223b", marginBottom: "0.5rem" }}>{member.role}</h4>
										<p style={{ fontSize: "0.98rem", color: "#444", opacity: 0.85 }}>{member.bio}</p>
									</div>
								</div>
							))}
						</div>
						<div style={{ textAlign: "center", marginTop: "2.5rem" }}>
							<Link href="/team" className="cta-button purple">
								{t("about.fullTeamBtn")}
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}