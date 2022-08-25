import React from "react";
import bunnyPhoto from "../photos/bunnypic.jpg";

const Home = () => {
  return (
    <div className="home-header">
      <div className="intro">
        <h1>hello world, my name is</h1>
        <h2 className="big-header">Cory Gold.</h2>
        <h3 className="big-header">I build software.</h3>
        <p>
          I'm a full stack developer who enjoys making things and working
          alongside good people.
        </p>
      </div>
      <div>
        <img id="bunny-photo" src={bunnyPhoto} alt="Cory with Bunny" />
      </div>
    </div>
  );
};

export default Home;
