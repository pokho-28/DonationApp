import React from "react";
import "./ContactForm.css";
function ContactForm(props) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div id={props.id} className="contact-form">
      <h2>What's on your mind</h2>
      <form className="contactUS-form" onSubmit={onSubmitHandler}>
        <div className="form-elements">
          <label className="contactUs-label">Name</label>
          <input type="text" placeholder="Name" className="inputs" />
        </div>
        <div className="form-elements">
          <label className="contactUs-label">Email</label>
          <input type="email" placeHolder="Email" className="inputs" />
        </div>
        <div className="form-elements">
          <label className="contactUs-label">Message</label>
          <textarea
            rows={5}
            cols={50}
            placeholder="Enter your query here ..."
          />
        </div>
        <button typeof="submit" className="form-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
