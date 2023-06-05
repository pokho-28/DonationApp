import React from "react";
import "./DonationCard.css";
import cardImage from "../resources/image.webp";
function DonationCard() {
  return (
    <div className="donation-card">
      <img src={cardImage} alt="image1" />
      <div className="card-content">
        <h3>Help Muskan to fight lung cancer</h3>
        <progress id="file" value="50" max="100" />
        <p style={{ textAlign: "center" }}>
          Raised <span style={{ color: "#818181" }}>Rs 2,00,000</span> of Rs{" "}
          4,00,000{" "}
        </p>
      </div>
      <button className="card-btn">Donate</button>
    </div>
  );
}

export default DonationCard;
