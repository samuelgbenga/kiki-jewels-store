import React from "react";
import jewelsImage from "../assets/image/jewels.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${jewelsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <h1>Timeless Elegance</h1>
        <p>Discover our exquisite collection of handcrafted jewelry</p>
        <button className="cta-button">Explore Collection</button>
      </div>
    </section>
  );
};

export default HeroSection;
