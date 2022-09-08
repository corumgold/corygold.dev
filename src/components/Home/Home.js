import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <>
      <sidebar className="sidebar">
        <div className="links">
          <a
            href={process.env.PUBLIC_URL + "/Cory Gold Resume.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src={process.env.PUBLIC_URL + "/images/resume.png"}
              alt="resume"
            />
          </a>
          <a
            href="https://github.com/corumgold"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src={process.env.PUBLIC_URL + "/images/github.png"}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cory-gold-378590120/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src={process.env.PUBLIC_URL + "/images/linkedin.png"}
              alt="linkedin"
            />
          </a>
        </div>
      </sidebar>
      <div className="home-header">
        <div className="intro">
          <h1>hello world, my name is</h1>
          <h2 className="big-header">Cory Gold</h2>
          <h3 className="big-header">I build software.</h3>
          <p>
            I'm a <span>full stack developer</span> who enjoys{" "}
            <span>making things</span> and working alongside{" "}
            <span>good people</span> on the web.
          </p>
        </div>
      </div>
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
