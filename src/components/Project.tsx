import "../styles/Project.css";

interface Technology {
  name: string;
  url_icon: string;
}

interface ProjectProps {
  name?: string;
  type?: string;
  description?: string;
  technologies?: Technology[];
  url?: string;
}

export default function Project({
  name,
  type,
  description,
  url,
  technologies = [],
}: ProjectProps) {
  const projectCard = (
    <section className="project-section">
      <div className="project-container">
        <div className="project-content">
          <p className="project-title">{name}</p>
          <p className="project-type">{type}</p>
          <p className="project-description">{description}</p>
        </div>

        <div className="project-technologies-container">
          {technologies.map((tech) => (
            <div className="technology-item" key={tech.name}>
              <img
                src={tech.url_icon}
                alt={tech.name}
                className="technology-icon"
              />
              <span className="technology-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      {projectCard}
    </a>
  ) : (
    projectCard
  );
}
