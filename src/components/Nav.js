import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <nav>
      <NavLink to="/">/home</NavLink>
      <NavLink to="/projects">/projects</NavLink>
    </nav>
  );
};

export default Nav;
