import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="links">
        <a
          href={process.env.PUBLIC_URL + "/Cory Gold Resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/resume.png"}
            alt="resume"
          />
        </a>
        <a href="https://github.com/corumgold" target="_blank" rel="noreferrer">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/github.png"}
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/corygold/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/linkedin.png"}
            alt="linkedin"
          />
        </a>
        <a href="mailto:goldcorum@gmail.com">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/email.png"}
            alt="email"
          />
        </a>
      </div>
      <p>Created with love by Cory Gold | © twentytwentytwo</p>
    </div>
  );
};

export default Footer;
