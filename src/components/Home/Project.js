import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img id="proj-image" src={project.image} alt={project.altText} />
      </div>
      <div className="project-details">
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tools">
            {project.tools.map((tool) => {
              return <p className="tool">{tool}</p>;
            })}
          </div>
          <a href={project.projectLink} rel="noreferrer" target="_blank">
            <button>
              Source Code{" "}
              <img
                className="button-icon"
                src={process.env.PUBLIC_URL + "/images/github.png"}
                alt="github"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
