import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import ContactMe from "./components/ContactMe";
import { useRef } from "react";
import Navbar from "./components/Navbar";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement | null>,
  ) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio-container">
      <header>
        <div ref={homeRef} className="left-icon-container">
          <p className="left-icon">CM</p>
        </div>
      </header>
      <main>
        <Navbar
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, projectsRef, stackRef, contactRef }}
        />
        <div>
          <HeroSection />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Experience />
        </div>
        <div ref={stackRef}>
          <TechStack />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </main>
      <footer className="footer-container">
        <p className="footer-text">© 2025 César Augusto Méndez Camacho.</p>
      </footer>
    </div>
  );
}

export default App;
