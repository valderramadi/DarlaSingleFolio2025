// import Hero from "../components/Hero";
import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";
import '../css/contact.css'; 
import techBackground from '../assets/techbackground.mp4';
import '../components/Footer.js';

import python from "../assets/icons/python.svg";
import sql from "../assets/icons/sqlDB.svg";
import pandas from "../assets/icons/pandas.svg";
import scikitLearn from "../assets/icons/scikit_learn.svg";
import tensorflow from "../assets/icons/tensorflow.svg";
import jupyter from "../assets/icons/jupyternotebook.svg";


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
          <div className="content-container">
              <ContactForm />
          </div>

          {/* Skills Section */}
          <div className="skills-container">
              <div className="skill">
                  <img src={python} alt="Python" className="skill-icon" />
                  <p className="skill-label">Python</p>
              </div>
              <div className="skill">
                  <img src={sql} alt="SQL" className="skill-icon" />
                  <p className="skill-label">SQL</p>
              </div>
              <div className="skill">
                  <img src={pandas} alt="Pandas" className="skill-icon" />
                  <p className="skill-label">Pandas</p>
              </div>
              <div className="skill">
                  <img src={scikitLearn} alt="Scikit-Learn" className="skill-icon" />
                  <p className="skill-label">Scikit-Learn</p>
              </div>
              <div className="skill">
                  <img src={tensorflow} alt="TensorFlow" className="skill-icon" />
                  <p className="skill-label">TensorFlow</p>
              </div>
              <div className="skill">
                  <img src={jupyter} alt="Jupyter Notebook" className="skill-icon" />
                  <p className="skill-label">Jupyter Notebook</p>
              </div>
          </div>

          {/* <Footer /> */}
      </div>
  );
};

export default Contact;
