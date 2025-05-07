import React, { useState } from "react";
import ui1Image from "../assets/image/ui1.png";
import ui2Image from "../assets/image/ui2.png";
import ui3Image from "../assets/image/ui3.png";
import ui4Image from "../assets/image/ui4.png";

const JewelryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    { id: 1, name: "Emerald Ring", price: "$3,299", image: ui1Image },
    { id: 2, name: "Ruby Pendant", price: "$2,199", image: ui2Image },
    { id: 3, name: "Diamond Earrings", price: "$1,799", image: ui3Image },
    { id: 4, name: "Gold Chain", price: "$999", image: ui4Image },
    //{ id: 5, name: "Sapphire Bracelet", price: "$2,899" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="carousel-section">
      <h2>More Exquisite Pieces</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          ←
        </button>
        <div className="carousel-items">
          {carouselItems.slice(currentIndex, currentIndex + 3).map((item) => (
            <div key={item.id} className="carousel-item">
              <div className="item-image">
                <img
                  src={item.image}
                  alt={item.name}
                  className="carousel-img"
                />
              </div>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="view-details">View Details</button>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          →
        </button>
      </div>
    </section>
  );
};

export default JewelryCarousel;
