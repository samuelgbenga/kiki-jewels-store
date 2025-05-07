import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VisionSection from "../components/VisionSection";
import ShowcaseSection from "../components/ShowcaseSection";
import JewelryCarousel from "../components/JewelryCarousel";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ShowcaseSection />
      <JewelryCarousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
