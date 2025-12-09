interface TechProps {
  name?: string;
  url_icon?: string;
}

export default function TechCard({ name, url_icon }: TechProps) {
  return (
    <div className="technology-item" key={name}>
      <img src={url_icon} alt={name} className="technology-icon" />
      <span className="technology-name">{name}</span>
    </div>
  );
}
