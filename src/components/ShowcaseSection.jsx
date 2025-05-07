import React from "react";
import item1Image from "../assets/image/item1.jpg";
import item2Image from "../assets/image/item2.jpg";
import item3Image from "../assets/image/item3.jpg";
import item4Image from "../assets/image/item5.jpg";

const ShowcaseSection = () => {
  const featuredItems = [
    { id: 1, name: "Diamond Necklace", price: "$1,999", image: item1Image },
    { id: 2, name: "Sapphire Ring", price: "$2,499", image: item2Image },
    { id: 3, name: "Pearl Earrings", price: "$899", image: item3Image },
    { id: 4, name: "Gold Bracelet", price: "$1,499", image: item4Image },
  ];

  return (
    <section id="collection" className="showcase-section">
      <h2>Featured Collection</h2>
      <div className="showcase-grid">
        {featuredItems.map((item) => (
          <div key={item.id} className="showcase-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} className="showcase-img" />
            </div>
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button className="view-details">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
