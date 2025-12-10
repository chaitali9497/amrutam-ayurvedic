import React from "react";
import footerImg from "../assets/footer/footer.png"; 
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-img-container">
      <img src={footerImg} alt="Footer" className="footer-img" />
    </div>
  );
};

export default Footer;
