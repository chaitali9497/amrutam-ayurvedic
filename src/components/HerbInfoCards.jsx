import React from "react";
import herbImg from "../assets/herbs/shatavari.png"; 
import "../styles/HerbInfoCards.css";
import highlightsIcon from "../assets/product/highlights.png";

const HerbInfoCards = () => {
  const items = [
    {
      title: "Shatavar",
      desc: "Naturally enhances brain and relieves pain",
      img: herbImg,
    },
    {
      title: "Shatavar",
      desc: "Naturally enhances brain and relieves pain",
      img: herbImg,
    },
    {
      title: "Shatavar",
      desc: "Naturally enhances brain and relieves pain",
      img: herbImg,
    },
    {
      title: "Shatavar",
      desc: "Naturally enhances brain and relieves pain",
      img: herbImg,
    },
  ];

  return (
    <div>
        <h3 className="herb-title">
             <img src={highlightsIcon } alt="" className="herb-icon" />
           Key Ingredients</h3>
    <div className="herb-grid">
      {items.map((item, i) => (
        <div className="herb-card" key={i}>
          <img src={item.img} alt={item.title} className="herb-img" />

          <div className="text-block">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

          <span className="arrow">›</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HerbInfoCards;
