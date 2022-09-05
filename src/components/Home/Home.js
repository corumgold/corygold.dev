import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <div className="intro">
          <h1>hello world, my name is</h1>
          <h2 className="big-header">Cory Gold.</h2>
          <h3 className="big-header">I build software.</h3>
          <p>
            I'm a <span>full stack developer</span> who enjoys{" "}
            <span>making things</span> and working alongside{" "}
            <span>good people</span> on the web.
          </p>
        </div>
        <div>
          <img id="bunny-photo" src={process.env.PUBLIC_URL + "/images/bunnypic.jpg"} alt="Cory with Bunny" />
        </div>
      </div>
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
