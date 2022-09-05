import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <a href={project.projectLink} target="_blank">
        <h3>{project.title}</h3>
      </a>
      <img src={project.image} alt={project.altText} />
      <p className="description">{project.description}</p>
    </div>
  );
};

export default Project;
