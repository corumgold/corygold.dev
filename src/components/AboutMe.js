import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me" className="about-me">
      <h4>/about_me</h4>
      <div className="profile-picture">
        <img src={process.env.PUBLIC_URL + "/images/bunnypic.jpg"} alt="profile"/>
      </div>
      <div id="about-me-code">
        <header id="about-me-header">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </header>
        <div className="about-me-entry">
          <p className="about-me-text">
            {"> console.log("}
            {<span id="console-log">Cory.homeBase</span>}
            {")"}
          </p>
          <p className="about-me-text">{'"Chattanooga, TN"'}</p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{"> console.log("}
            {<span id="console-log">Cory.interests</span>}
            {")"}</p>
          <p className="about-me-text">
            {
              '["minimalist design", "rock climbing", "cooking", "horror novels", "car camping"]'
            }
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{"> console.log("}
            {<span id="console-log">Cory.education</span>}
            {")"}</p>
          <p className="about-me-text">
            {'"B.A. Liberal Studies - PennWest California"'}
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{"> console.log("}
            {<span id="console-log">Cory.skills</span>}
            {")"}</p>
          <p className="about-me-text">
            {
              '["JavaScript", "LESS", "React", "Redux", "Node", "Express", "PostgreSQL", "git"]'
            }
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text">{"> console.log("}
            {<span id="console-log">Cory.nextAdventure</span>}
            {")"}</p>
            <p className="about-me-text">
            {'undefined'}
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-text" id="about-me-cursor">{"> "}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
