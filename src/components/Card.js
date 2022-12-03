const Card = ({ projects }) => {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <section className="project-item">
          <div className="project-image">
            <img src={project.image} alt={project.title}></img>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a href={project.gitHubUrl} className="btn">
              Github URL
            </a>
            <a href={project.deployedUrl} className="btn">
              Visit Live Application
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Card;
