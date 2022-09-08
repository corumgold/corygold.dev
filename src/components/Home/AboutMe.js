import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me home-container">
      <h4>About Me</h4>
      <div id="about-me-code">
        <header id="about-me-header">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </header>
        <div className="about-me-entry">
          <p className="about-me-text">{">  Cory.currentLocation"}</p>
          <p className="about-me-text">{'"Chattanooga, TN"'}</p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{">  Cory.interests"}</p>
          <p className="about-me-text">
            {
              '["minimalist design", "rock climbing", "cooking", "horror novels", "car camping"]'
            }
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{">  Cory.education"}</p>
          <p className="about-me-text">
            {'"B.A. Liberal Studies - PennWest California"'}
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{">  Cory.skills"}</p>
          <p className="about-me-text">
            {
              '["JavaScript", "LESS", "React", "Redux", "Node", "Express", "PostgreSQL", "git"]'
            }
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{">  Cory.nextBigAdventure"}</p>
          <p className="about-me-text about-me-cursor">
            {
              '> '
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
