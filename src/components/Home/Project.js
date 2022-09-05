import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.altText} />
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
