import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa6";

const Brochure = () => {
  const { t } = useTranslation();

  return (
    <section className="brochure-section" style={{
      background: "linear-gradient(120deg, #f0e6fa 0%, #fff 100%)",
      borderRadius: "2rem",
      boxShadow: "0 2px 16px rgba(149,77,230,0.06)",
      margin: "2rem auto",
      maxWidth: 900,
      padding: "2.5rem 2rem",
      textAlign: "center"
    }}>
      <h2 className="section-title" style={{ marginBottom: "1.2rem" }}>
        {t("brochure.title")}
      </h2>
      <p style={{ fontSize: "1.15rem", marginBottom: "2rem", color: "#954de6" }}>
        {t("brochure.desc")}
      </p>
      <a
        href="/brochure.pdf"
        download
        className="brochure-download-btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.7rem",
          background: "linear-gradient(90deg, #954de6 0%, #fc9e4f 100%)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.15rem",
          padding: "1rem 2.2rem",
          borderRadius: "2rem",
          boxShadow: "0 4px 20px rgba(149,77,230,0.13), 0 2px 8px rgba(252,158,79,0.10)",
          textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
        }}
      >
        <FaDownload size={22} />
        {t("brochure.button")}
      </a>
    </section>
  );
};

export default Brochure;