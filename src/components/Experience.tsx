import "../styles/Experience.css";
import Project from "./Project";
import myProjects from "../data/projects.json";

export default function Experience() {
  return (
    <section className="my-project-section">
      <div className="my-project-container">
        <div className="my-project-content">
          <p className="my-project-title">Experience / Projects</p>
          <div className="my-project-project" onClick={() => {}}>
            {myProjects.projects.map((project) => (
              <Project
                key={project.id}
                name={project.name.en}
                type={project.type.en}
                description={project.description.en}
                url={project.url}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
