import React from "react";
import "./about.css";

import Header from "../header/header";
function About() {
  return (
    <>
    <Header />

      <div className="cardWrapper">
        <h1>About me:</h1>
      <div className="card">
        <h2>
                      I am an aspiring software developer with a passion for coding and technology.
                      Eager to expand my skills and knowledge, I am continuously learning new programming languages, frameworks, and best practices. I enjoy problem-solving and building efficient, user-friendly applications. My goal is to create innovative solutions that can make a positive impact, and I am excited to contribute to the tech community while growing both personally and professionally.
        </h2>
      </div>
      </div>
    </>
  );
}

export default About;