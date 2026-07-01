import { useState, type JSX } from "react";
import { FiHome, FiUser, FiBriefcase, FiLayers, FiMail } from "react-icons/fi";
import "../styles/Navbar.css";

interface NavbarRefs {
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  stackRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: NavbarRefs;
}

interface NavItem {
  id: string;
  icon: JSX.Element;
  label: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function Navbar({ scrollToSection, refs }: NavbarProps) {
  const { homeRef, aboutRef, projectsRef, stackRef, contactRef } = refs;
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleClick = (
    section: string,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    setActiveSection(section);
    scrollToSection(ref);
  };

  const navItems: NavItem[] = [
    { id: "home", icon: <FiHome />, label: "Home", ref: homeRef },
    { id: "about", icon: <FiUser />, label: "About", ref: aboutRef },
    {
      id: "projects",
      icon: <FiBriefcase />,
      label: "Projects",
      ref: projectsRef,
    },
    { id: "stack", icon: <FiLayers />, label: "Stack", ref: stackRef },
    { id: "contact", icon: <FiMail />, label: "Contact", ref: contactRef },
  ];

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id, item.ref)}
            className={`navLink ${activeSection === item.id ? "active" : ""}`}
          >
            <span className="navIcon">{item.icon}</span>
            {activeSection === item.id && (
              <span className="navLabel">{item.label}</span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
