import React from "react";
import { useState } from "react";

const Nav = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleBurger = () => {
    const navLinks = document.querySelectorAll(".nav-links li");

    setBurgerClicked(!burgerClicked);

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.8
        }s`;
      }
    });
  };

  return (
    <nav className="navbar">
      <div className="brand-title">corygold.dev</div>
      <ul className={burgerClicked ? "nav-links nav-active" : "nav-links"}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        onClick={handleBurger}
        className={burgerClicked ? "burger toggle" : "burger"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Nav;
