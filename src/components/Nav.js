import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">/home</Link>
      <Link to="/projects">/projects</Link>
      <Link to="/experience">/experience</Link>
      <Link to="/equipment">/equipment</Link>
    </nav>
  );
};

export default Nav;
