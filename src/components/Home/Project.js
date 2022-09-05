import React from "react";

const Project = ({ project }) => {
  const imgUrl = project.image;
  console.log(imgUrl)

  return (
    <div className="project">
      <h3>{project.title}</h3>
      <img src={process.env.PUBLIC_URL + "/images/Chickagotchi.png"} alt="chickagotchi" />
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
