import React from 'react';
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one forres">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>

        <div className="footer_details_one forres">
          <h3>Connect With Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer_details_one forres">
          <h3>Make Money With Us</h3>
          <p>Sell on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
        </div>
      </div>

      <div className="lastdetails">
        <img
          src="https://www.per-accurate.com/wp-content/uploads/2021/05/amazon_PNG25.png"
          alt="Amazon Logo"
        />
        <p>
          Conditions of Use & Sale &nbsp;&nbsp;&nbsp; Privacy Notice
          &nbsp;&nbsp;&nbsp; Interest-Based Ads &nbsp;&nbsp;&nbsp;
          © 1996-{year}, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
