import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default Home;
