import React from "react";
import DonationCard from "./DonationCard";
import "./CardCollection.css";
function CardCollection(props) {
  return (
    <div className="card-collection" id={props.id}>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "'Roboto', sans-serif",
          color: "#3CB2BA",
        }}
      >
        Your Little Help Matters
      </h3>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "700",
          fontFamily: "'Playfair Display', serif",
          marginBottom: "30px",
        }}
      >
        Donate For A Cause
      </h1>
      <div className="cards" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </div>
    </div>
  );
}

export default CardCollection;
