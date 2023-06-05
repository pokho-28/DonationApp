import React from "react";
import Navbar from "./Navbar";
import IconDashboard from "./IconDashboard";
import "./Home.css";
import Intro from "./Intro";
import CardCollection from "./CardCollection";
import AboutUs from "./AboutUs";
import ContactUS from "./ContactUS";
import Footer from "./Footer";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Intro />
      <IconDashboard />
      <CardCollection id="donation" />
      <AboutUs />
      <ContactUS />
      <Footer />
    </div>
  );
}

export default Home;
