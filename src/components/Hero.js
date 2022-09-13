import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/paper.jpg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <div className="intro">
          <h1>hello world, I'm</h1>
          <h2 className="big-header">
            <Typewriter
              className="big-header"
              words={[
                "Cory Gold",
                "an Engineer",
                "Cory Gold",
                "a Minimalist",
                "Cory Gold",
                "an Artist",
                "Cory Gold",
                "a Designer",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <h3 className="big-header">I build software.</h3>
          <p>
            I'm a <span>full-stack</span> engineer who enjoys making{" "}
            <span>intuitive applications</span> and working alongside{" "}
            <span>talented people</span> on the web.
          </p>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
};

export default Hero;
