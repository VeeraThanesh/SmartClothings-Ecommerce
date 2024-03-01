import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/shop_logo.png";
import navprofile from "../../assets/user_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo-container">
        <img src={navlogo} className="nav-logo" alt="" />
        <div>
          <h3>SHOPPER</h3>
          <h6>Admin Panel</h6>
        </div>
      </div>
      <div className="nav-logo-admin">
        <img src={navprofile} className="nav-profile" alt="" />
        <h6>SMART</h6>
      </div>
    </div>
  );
};

export default Navbar;
