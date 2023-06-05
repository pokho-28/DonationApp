import React from "react";
import "./IconDashboard.css";
import AdoptionImg from "../resources/adoption.jpg";
import VoulteerImg from "../resources/volunteer.png";
import DonationImg from "../resources/donation.png";
function IconDashboard() {
  return (
    <div className="icon-dashboard">
      <h3 className="item2 item">What We Believe</h3>
      <h1 className="item1 item">You Can Help By</h1>

      <img className="iconItem" src={DonationImg} alt="donationImg" />

      <img className="iconItem" src={AdoptionImg} alt="adoptionImg" />
      <img className="iconItem" src={VoulteerImg} alt="volunteerImg" />
      <p>
        <h2>Donation</h2>
        Generosity is not about how much you give, but how much love you put
        into giving
      </p>
      <p>
        <h2>Adoption</h2>
        Adoption is the beautiful tapestry that weaves hearts together, creating
        a forever family
      </p>
      <p>
        <h2>Volunteer</h2>
        Volunteering is the art of giving oneself and painting a brighter world
        with acts of kindness
      </p>
    </div>
  );
}

export default IconDashboard;
