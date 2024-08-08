import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImng from "../assets/contact.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
    <Navbar />
    <div className="contact-image-container">
    <img className="contact-image" src={ContactImng} alt="Contact Image" />
   </div>
    <Hero 
    cName=".hero-mid"
    title="Contact me!"
    btnClass="hide"
    />
    <ContactForm />
    <Footer />
   </div>
  );                  
};

export default Contact;