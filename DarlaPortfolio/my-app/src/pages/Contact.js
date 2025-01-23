
import Hero from "../components/Hero";
import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import '../css/contact.css'; // Ensure you include your CSS styles
import techBackground from '../assets/techbackground.mp4';
import '../components/Footer.js';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={techBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <Navbar />
      <div className="content-container" >
        <ContactForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
