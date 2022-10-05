import React from "react";
import { useInView } from "react-intersection-observer";

const Project = ({ project }) => {
  const { ref: imageRef, inView: imageVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="project">
      <div
        className={
          imageVisible
            ? project.id % 2 === 0
              ? "animate-image-left project-image"
              : "animate-image-right project-image"
            : "project-image"
        }
      >
        <img
          ref={imageRef}
          id="proj-image"
          src={project.image}
          alt={project.altText}
        />
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
          <div className="project-buttons">
            {project.liveLink ? (
              <a href={project.liveLink} rel="noreferrer" target="_blank">
                <button>
                  Open App{" "}
                  <img
                    className="button-icon"
                    src={process.env.PUBLIC_URL + "/images/external-link.png"}
                    alt="live link"
                  />
                </button>
              </a>
            ) : null}
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
    </div>
  );
};

export default Project;
