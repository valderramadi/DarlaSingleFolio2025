// leaving footer component here for upcoming integration ... come back to this dv
import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import '../css/footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          {/* <FaFacebookF /> */}
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Share</span>
          <span>Benefits</span>
        </div>
        </div>
        <div className="footer-section-three">
        <div className="footer-section-columns">
          <span> DarlaValderrama5@gmail.com</span>
        </div>
        </div>
        <div className='footer-section-four'>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        </div>
      </div>
  );
};

export default Footer;

