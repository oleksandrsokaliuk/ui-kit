import React from "react";
import "./FirstFooter.styles.css";
import Logo from "./logo.png";

const FirstFooter = () => {
  return (
    <footer className="footers-first">
      <article>
        <h2>Try Hologram Today</h2>
        <button>
          <p>Sign up free</p>
          <span> &#x2192; </span>
        </button>
      </article>
      <section className="top">
        <img src={Logo} alt="logo" height="30px" width="30px" />
        <ul>
          <li>
            <h3>Resources</h3>
            <a>Usage</a>
            <a>Docs</a>
            <a>Support</a>
            <a>Hardware</a>
          </li>
          <li>
            <h3>Pricing</h3>
            <a>Overview</a>
            <a>Flexible Data</a>
            <a>High Volume</a>
            <a>Enterprise</a>
          </li>
          <li>
            <h3>Developer</h3>
            <a>Forum</a>
            <a>Projects</a>
            <a>Open Source</a>
            <a>GitHub</a>
          </li>
          <li>
            <h3>Company</h3>
            <a>About Us</a>
            <a>Blog</a>
            <a>Partnerships</a>
            <a>Careers</a>
          </li>
        </ul>
      </section>
      <section className="bottom">&#xa9; 2023 Hologram</section>
    </footer>
  );
};

export default FirstFooter;
