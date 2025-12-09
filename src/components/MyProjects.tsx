import "../styles/MyProjects.css";
import Project from "./Project";
import experienceProjects from "../data/experience.json";

export default function Projects() {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-content">
          <p className="experience-title">Projects</p>
          <div className="experience-project">
            {experienceProjects.projects.map((project) => (
              <Project
                key={project.id}
                name={project.name.en}
                type={project.type.en}
                description={project.description.en}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
