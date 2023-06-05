import React from "react";
import "./AboutUs.css";
import AboutImg from "../resources/aboutImage.jpg";
function AboutUs() {
  return (
    <div>
      <h3>About Us</h3>
      <h1 className="heading">Who We Are</h1>
      <div className="about">
        <img id="aboutImg" src={AboutImg} alt="aboutImg" />
      </div>
    </div>
  );
}

export default AboutUs;
