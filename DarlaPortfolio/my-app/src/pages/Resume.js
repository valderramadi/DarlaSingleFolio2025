import React from 'react';
import { FaDownload } from 'react-icons/fa';
import '../css/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      {/* Resume Header */}
      <h2
        data-aos="fade-down"
        data-aos-duration="1500"
        className="resume-header"
      >
        Resume
      </h2>

      {/* Display Resume Image */}
      <div className="resume-container">
        <img
          src={`${process.env.PUBLIC_URL}/Darla_Valderrama_2025_Resume copy.jpg`} // Update the path to your image
          alt="Darla Valderrama Resume"
          className="resume-image"
        />
      </div>

      {/* Download Button */}
      <div className="resume-download">
        <a
          href={`${process.env.PUBLIC_URL}/resume2025.pdf`}
          download="Darla_Valderrama_2025_Resume.pdf"
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
