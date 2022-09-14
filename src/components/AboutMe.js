import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h4>/about_me</h4>
      <div className="profile-picture">
        <img
          src={process.env.PUBLIC_URL + "/images/profile-photo.png"}
          alt="profile"
        />
      </div>
      <div id="about-me-code">
        <header id="about-me-header">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </header>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {<span id="console-log">Cory.homeBase</span>}
            {")"}
          </p>
          <p className="about-me-response">{<span>"Chattanooga, TN"</span>}</p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {<span id="console-log">Cory.interests</span>}
            {")"}
          </p>
          <p className="about-me-response">
            [{<span>"minimalist design"</span>}, {<span>"rock climbing"</span>},{" "}
            {<span>"cooking"</span>}, {<span>"horror novels"</span>},
            {<span>"car camping"</span>}]
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {<span id="console-log">Cory.education</span>}
            {")"}
          </p>
          <p className="about-me-response">
            <span>"B.A. Liberal Studies - PennWest California"</span>
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.dir("}
            {<span id="console-log">Cory.skills</span>}
            {")"}
          </p>
          <p className="about-me-array">frontEnd: Array(4)</p>
          <ul>
            <li className="array-item">0: {<span>"JavaScript"</span>}</li>
            <li className="array-item">1: {<span>"React.js"</span>}</li>
            <li className="array-item">2: {<span>"Redux"</span>}</li>
            <li className="array-item">3: {<span>"LESS"</span>}</li>
          </ul>
          <p className="about-me-array">backEnd: Array(3)</p>
          <ul>
            <li className="array-item">0: {<span>"Node.js"</span>}</li>
            <li className="array-item">1: {<span>"Express.js"</span>}</li>
            <li className="array-item">2: {<span>"PostgreSQL"</span>}</li>
          </ul>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {<span id="console-log">Cory.nextAdventure</span>}
            {")"}
          </p>
          <p className="about-me-response">{<span>undefined</span>}</p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> "}
            <Typewriter
              className="about-me-response"
              words={[""]}
              cursor
              cursorStyle="_"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
