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
            {<span id="console-log">Cory.bio</span>}
            {")"}
          </p>
          <p className="about-me-response">
            {
              <>
                <span id="bio">
                  "Hi, I'm Cory! After a transformative career shift, I've found
                  my passion in software engineering. Formerly dedicated to
                  improving lives through exercise and nutrition, I've since
                  redirected my energy towards crafting seamless digital
                  experiences and solving complex problems."
                </span>
                <span className="bio">
                  "Three years ago, inspired by a friend's enthusiasm for
                  software engineering, I embarked on a journey to re-skill
                  myself. Now, as a Frontend Engineer at Text2Order, I lead
                  initiatives to optimize event ordering processes and enhance
                  user experiences through technologies like JavaScript, React,
                  and GraphQL."
                </span>
              </>
            }
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {<span id="console-log">Cory.interests</span>}
            {")"}
          </p>
          <p className="about-me-response">
            [{<span>"minimalist design"</span>}, {<span>"writing music"</span>},{" "}
            {<span>"cooking"</span>}, {<span>"horror novels"</span>},
            {<span>"organic gardening"</span>}]
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {<span id="console-log">Cory.education</span>}
            {")"}
          </p>
          <p className="about-me-response">
            [{<span>"B.A. Liberal Studies - Pennwest California"</span>},{" "}
            {
              <span>
                "Software Engineering Certificate - Fullstack Academy"
              </span>
            }
            ]
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.dir("}
            {<span id="console-log">Cory.skills</span>}
            {")"}
          </p>
          <p className="about-me-array">frontEnd: Array(5)</p>
          <ul>
            <li className="array-item">1: {<span>"React.js"</span>}</li>
            <li className="array-item">2: {<span>"Redux"</span>}</li>
            <li className="array-item">0: {<span>"TypeScript"</span>}</li>
            <li className="array-item">0: {<span>"JavaScript"</span>}</li>
          </ul>
          <p className="about-me-array">backEnd: Array(4)</p>
          <ul>
            <li className="array-item">0: {<span>"Node.js"</span>}</li>
            <li className="array-item">1: {<span>"Express.js"</span>}</li>
            <li className="array-item">2: {<span>"Sequelize.js"</span>}</li>
            <li className="array-item">2: {<span>"PostgreSQL"</span>}</li>
            <li className="array-item">2: {<span>"GraphQL"</span>}</li>
          </ul>
          <p className="about-me-array">other: Array(4)</p>
          <ul>
            <li className="array-item">1: {<span>"Git"</span>}</li>
            <li className="array-item">2: {<span>"NPM"</span>}</li>
            <li className="array-item">2: {<span>"Agile Workflow"</span>}</li>
            <li className="array-item">2: {<span>"RESTful API Design"</span>}</li>
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
