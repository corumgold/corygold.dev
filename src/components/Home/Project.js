import React from "react";

const Project = ({ project }) => {
  const imgUrl = project.image;
  console.log(imgUrl)

  return (
    <div className="Project">
      <h3>{project.title}</h3>
      <img src={require("../../photos/Chickagotchi.png")} alt={project.altText} />
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
