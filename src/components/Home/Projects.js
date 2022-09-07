import React from "react";
import Project from "./Project";
import projects from "../../projects";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="home-projects home-container">
      <h4>
        <span>2. </span>
        <Link to="/projects">Projects</Link>
      </h4>
      <div className="projects-carousel">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
