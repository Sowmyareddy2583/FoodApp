import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            quibusdam harum suscipit sint quis omnis labore ab architecto
            praesentium? Illo.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt=""/> 
          </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-5689275712</li>
                <li>contact@besteats.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='copy-right'>Copyright 2024 @ BestEats.com -All Right Reserved</p>
    </div>
  );
};

export default Footer;
