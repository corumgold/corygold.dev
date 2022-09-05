import React from "react";
import projects from "../projects";
import Project from "./Home/Project";

const ProjectsPage = () => {
  return (
    <>
      <h1>/projects</h1>
      <div id="project-detail">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </>
  );
};

export default ProjectsPage;
