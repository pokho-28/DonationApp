import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <p>&#169; DonationApp . All rights reserved 2023</p>
      <div className="icons-collection">
        <a className="social-icons">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social-icons">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="social-icons">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="social-icons">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
