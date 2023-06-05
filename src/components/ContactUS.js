import React from "react";
import "./ContactUs.css";
import ContactForm from "./ContactForm";
import Heart from "../resources/heart.png";
function ContactUS() {
  return (
    <div className="contact-div">
      <div id="heartImg">
        <img src={Heart} alt="heartImg" />
        <h1 id="contactUs">Contact Us</h1>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactUS;
