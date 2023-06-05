import React from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { useState } from "react";
function Navbar() {
  const [scrolledNav, setScrolledNav] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 27) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`nav + ${scrolledNav ? "scrolled-nav" : ""}`}>
        <h1 style={{ marginLeft: "15px" }}>Donation App</h1>
        <div className="nav__items">
          <ul style={{ marginRight: "15px" }}>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
