import React from "react";
import vision2Image from "../assets/image/vision2.png";
import vision3Image from "../assets/image/vision3.png";

const VisionSection = () => {
  return (
    <section id="about" className="vision-section">
      <div className="vision-content">
        <h2>Our Vision</h2>
        <p>
          To create timeless pieces that tell your unique story, crafted with
          passion and precision.
        </p>
        <div className="vision-image">
          <img src={vision2Image} alt="Our Vision" className="vision-img" />
        </div>
      </div>
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          To bring you the finest quality jewelry, sourced ethically and crafted
          with care, ensuring each piece becomes a cherished part of your
          journey.
        </p>
        <div className="mission-image">
          <img src={vision3Image} alt="Our Mission" className="mission-img" />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
