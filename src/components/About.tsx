import "../styles/About.css";
function About() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Mendez-Cesar-CV.pdf";
    link.download = "Mendez-Cesar-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="about-title">About Me</p>

          <p className="about-text">
            Systems Engineer passionate about Full-Stack and Mobile development,
            with a focus on building functional and scalable solutions. I am a
            proactive professional, committed to continuous learning and
            applying engineering best practices to ensure high-quality code.
            Motivated to contribute to impactful projects, I bring a
            collaborative mindset and a strong drive to deliver reliable and
            maintainable results.
          </p>

          <p className="about-text">
            Currently exploring and learning React Native, Next.js, and
            Solidity, expanding my skills in full-stack web, mobile, and
            blockchain development.
          </p>
        </div>

        <div className="about-info">
          <div className="info-item">
            <span className="info-label">Name</span>
            <span className="info-value">César Augusto Méndez Camacho</span>
          </div>

          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">c.augustomendez06@gmail.com</span>
          </div>

          <div className="info-item">
            <span className="info-label">Location</span>
            <span className="info-value">Cochabamba, BO</span>
          </div>

          <button className="download-btn" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
