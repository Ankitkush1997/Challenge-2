import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-section">
          <span className="heading">Company</span>
          <span>About Us</span>
          <span>Our Services</span>
          <span>Privacy Policy</span>
          <span> Affiliate Program</span>
        </div>
        <div className="footer-section">
          <span className="heading">Get Help</span>
          <span>FAQ</span>
          <span>Shipping</span>
          <span>Returns</span>
          <span>Order Status</span>
          <span>Payment Options</span>
        </div>
        <div className="footer-section">
          <span className="heading">Online Shop</span>
          <span>Watch</span>
          <span>Blog</span>
          <span>Shoes</span>
          <span> Dress</span>
        </div>
        <div className="footer-section">
          <span className="heading">Follow Us</span>
          <div className="facebook">Facebook</div>
          <div className="twitter">Twitter</div>
          <div className="instagram">Instagram</div>
          <div className="linkedin">Linkedin</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
