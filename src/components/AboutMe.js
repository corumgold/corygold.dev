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
                  "Hi, I'm Cory! For the first part of my adult life, I spent
                  long hours thinking of creative ways to help people be their
                  best selves through proper exercise and nutrition.
                  Consequently, my own mental and physical health began to
                  suffer.
                </span>
                <span className="bio">
                  2 years ago I was introduced to software engineering by a good
                  friend who told me how much he truly enjoyed his career. He
                  shared with me how he spent his days solving complex problems
                  and creating outstanding user experiences, while enjoying the
                  freedom to take care of his health and wellbeing.
                </span>
                <span className="bio">
                  Since then, I have spent my time teaching myself and attending
                  an immersive software engineering boot camp to arm myself with
                  the skills necessary to thrive as a software engineer. Now, I
                  get to help people by creating applications that are intuitive
                  and delightful to use, while having the time and energy to
                  take care of myself and my family, too."
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
            <li className="array-item">0: {<span>"JavaScript"</span>}</li>
            <li className="array-item">1: {<span>"React.js"</span>}</li>
            <li className="array-item">2: {<span>"Redux"</span>}</li>
            <li className="array-item">2: {<span>"SASS"</span>}</li>
            <li className="array-item">3: {<span>"LESS"</span>}</li>
          </ul>
          <p className="about-me-array">backEnd: Array(4)</p>
          <ul>
            <li className="array-item">0: {<span>"Node.js"</span>}</li>
            <li className="array-item">1: {<span>"Express.js"</span>}</li>
            <li className="array-item">2: {<span>"Sequelize.js"</span>}</li>
            <li className="array-item">2: {<span>"PostgreSQL"</span>}</li>
          </ul>
          <p className="about-me-array">other: Array(4)</p>
          <ul>
            <li className="array-item">1: {<span>"Git"</span>}</li>
            <li className="array-item">2: {<span>"NPM"</span>}</li>
            <li className="array-item">2: {<span>"Agile Workflow"</span>}</li>
            <li className="array-item">2: {<span>"RESTful APIs"</span>}</li>
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
