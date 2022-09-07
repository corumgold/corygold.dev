import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    textAlign: "center",
    transition: "top 0.6s",
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav style={{ ...navStyles, top: visible ? "0" : "-60px" }}>
      <NavLink to="/">/home</NavLink>
      <NavLink to="/projects">/projects</NavLink>
      {/* <NavLink to="/equipment">/equipment</NavLink> */}
    </nav>
  );
};

export default Nav;
