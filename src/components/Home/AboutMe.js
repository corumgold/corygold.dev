import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me home-container">
      <h4>
        <span>1. </span>About Me
      </h4>
      <content>
        <div className="about-me-text">
          <p>
            Hi! Thanks for stopping by. I started becoming interested in web
            development when cobbled together my first website using WordPress
            back in 2015. I knew a little bit of HTML and CSS,{" "}
            <span>how much more</span> could there be?
          </p>
          <p>
            Since then, I have spent <span>countless hours</span> learning
            everything I can about front end to back end development. What I
            love so much about development is the process - whether it be
            figuring out how to pass test specs or creating an application from
            the ground up, <span>there's always something more to learn</span>.
          </p>
          <p>
            I have taught myself and been formally trained in several different
            technologies including:
          </p>
        </div>
        <div className="technologies">
          <img
            src={process.env.PUBLIC_URL + "/images/technologies/javascript.png"}
            alt="javascript"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/technologies/react.png"}
            alt="react"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/technologies/redux.png"}
            alt="redux"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/technologies/node.png"}
            alt="node"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/technologies/express.png"}
            alt="express"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/technologies/postgresql.png"}
            alt="postgresql"
          />
        </div>
      </content>
    </div>
  );
};

export default AboutMe;
