import React from "react";
import "../styles/AppBanner.css";

import appstore from "../assets/appBannerIcons/appstore.png";
import googleplay from "../assets/appBannerIcons/googleplay.png";

import phone from "../assets/appBannerIcons/phone.png";
import eng from "../assets/appBannerIcons/eng.png";
import downloads from "../assets/appBannerIcons/downloads.png";
import msg from "../assets/appBannerIcons/msg.png";


function FeatureCard({ icon, text }) {
  return (
    <div className="feature-card">
      <img src={icon} alt="" />
      <p>
        {text.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}

 function AppBanner() {
  const features = [
    { icon: msg, text: "Access To\nPrescriptions" },
    { icon: msg, text: "Track Health\nEfficiently" },
    { icon: msg, text: "Direct Chat With\nDoctors" },
    { icon: msg, text: "In-App Reminders\nFor Consultations" },
  ];

  return (
    <section className="app-section">

      
      <div className="app-left">
        <h2>
          Download Amrutam Ayurveda <br /> App Now
        </h2>

        <p className="subtitle">
          The Amrutam Ayurveda App is your one–stop app for all things Ayurveda!
          Apart from mimicking the website, the app has added benefits.
        </p>

       
        <div className="features-grid">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div>

      
        <div className="store-btns">
          <img src={googleplay} alt="Google Play" />
          <img src={appstore} alt="App Store" />
        </div>
      </div>

     
      <div className="app-right">
        <img src={eng} className="engage-card" alt="Engagement" />
        <img src={phone} className="phone-img" alt="App Mockup" />
        <img src={downloads} className="user-badge" alt="User Badge" />
      </div>
    </section>
  );
}
export default AppBanner;
