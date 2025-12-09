import stack from "../data/tech-stack.json";
import TechCard from "./TechCard";
import "../styles/TechStack.css";

export default function TechStack() {
  return (
    <section className="stack-section">
      <div className="stack-container">
        <p className="stack-title">My Tech Stack</p>
        <div className="stack-div">
          {stack.technologies.map((s) => (
            <TechCard name={s.name} url_icon={s.url_icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
