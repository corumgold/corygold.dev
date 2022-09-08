import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img id="proj-image" src={project.image} alt={project.altText} />
      <div className="project-details">
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.projectLink} rel="noreferrer" target="_blank">
            <button>Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
