import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <nav>
      <NavLink to="/">/home</NavLink>
      <NavLink to="/projects">/projects</NavLink>
      {/* <NavLink to="/equipment">/equipment</NavLink> */}
    </nav>
  );
};

export default Nav;
