import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.altText} />
      <p className="description">{project.description}</p>
    </div>
  );
};

export default Project;
