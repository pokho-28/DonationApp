import React from "react";
import "./Intro.css";
import Image from "../resources/projectPng.png";

function Intro() {
  return (
    <div className="intro">
      <div className="quote">
        <p className="content">
          Alone we can do so little
          <br />
          Together we can do so much
        </p>
        <button className="fundBtn">Donate Now</button>
      </div>
      <div className="actionBtn">
        <img src={Image} alt="Project Image" style={{ width: "90%" }} />
      </div>
    </div>
  );
}

export default Intro;
