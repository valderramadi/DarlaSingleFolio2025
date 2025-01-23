import React from 'react';
import { FaDownload } from 'react-icons/fa';
import '../css/Resume.css';
import backgroundImage from '../assets/contact.jpg'; // Import the background image

const Resume = () => {
  return (
    <div className="resume-page">
      {/* Resume Header */}
      <h2
        data-aos="fade-down"
        data-aos-duration="1500"
        className="resume-header"
      >
        My Resume
      </h2>

      {/* Display Resume Image */}
      <div className="resume-container">
        <img
          src={`${process.env.PUBLIC_URL}/2024 Resume DIV copy.jpg`} // Update the path to your image
          alt="Darla Valderrama Resume"
          className="resume-image"
        />
      </div>

      {/* Download Button */}
      <div className="resume-download">
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download="Darla_Valderrama_Resume.pdf"
          className="download-button"
        >
          <FaDownload style={{ marginRight: "0.5rem" }} />
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
