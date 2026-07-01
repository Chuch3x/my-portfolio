import "../styles/Experience.css";
import Project from "./Project";
import myProjects from "../data/projects.json";

export default function Experience() {
  return (
    <section className="my-project-section">
      <div className="my-project-container">
        <div className="my-project-content">
          <p className="my-project-title">Experience</p>
          <div className="my-project-project">
            {myProjects.projects.map((project) => (
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
