import React from "react";
import Project from "./Project";
import projects from "../../projects";

const Projects = () => {
  return (
    <div className="home-projects home-container">
      <h4>Projects</h4>
      <div className="projects-carousel">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
