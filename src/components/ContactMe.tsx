import "../styles/Contact.css";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <p className="contact-title">Contact Me</p>

          <p className="contact-text">
            Interested in working together? Feel free to reach out for
            collaborations or just a friendly hello
          </p>

          <div className="contact-icons">
            <a
              href="mailto:c.augustomendez06@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail className="contact-icon" />
            </a>

            <a
              href="https://github.com/Chuch3x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/cesar-mendez-camacho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
