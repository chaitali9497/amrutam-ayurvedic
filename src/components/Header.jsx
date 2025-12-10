import "../styles/Header.css";
import { Link } from "react-router-dom";

import phone from "../assets/header-call.png";
import call from "../assets/call-top.png";
import logoImg from "../assets/amrutam-logo.png";


import walletIcon from "../assets/nav-icons/wallet.png";
import cartIcon from "../assets/nav-icons/cart.png";
import bellIcon from "../assets/nav-icons/bell.png";
import serviceIcon from "../assets/nav-icons/plant.png";

export default function Header() {
  return (
    <header className="header">

      
      <div className="header-top">
        <span>Your Well-Being Powered With Ayurveda</span>

        <button className="top-btn">
          <img src={call} className="phone-icon" />
          <p>Try Instant Free Call Now</p>
        </button>
      </div>

     
      <div className="header-main">

        
        <div className="phone-box">
          <img src={phone} className="phone-icon" />
          <span className="phone-text">+91 9826353231</span>
        </div>

      
       <img src={logoImg} alt="Amrutam Logo" className="logo" />


        
        <div className="right-section">
          
          <div className="menu-row">
            
            
           <nav className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/find-doctors">Find Doctors</Link>
  <Link to="/lab-tests">Lab Tests</Link>
  <Link to="/shop">Shop</Link>
  <Link to="/forum">Forum</Link>
  <Link to="/about-us">About Us</Link>
</nav>
            
            <div className="nav-icons">
                   <Link to="/wallet">
                  <img src={walletIcon} className="nav-icon" alt="Wallet" />
                 </Link>

<Link to="/cart">
  <img src={cartIcon} className="nav-icon" alt="Cart" />
</Link>

<Link to="/notifications">
  <img src={bellIcon} className="nav-icon" alt="Notifications" />
</Link>

<Link to="/services">
  <img src={serviceIcon} className="nav-icon" alt="Services" />
</Link>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
