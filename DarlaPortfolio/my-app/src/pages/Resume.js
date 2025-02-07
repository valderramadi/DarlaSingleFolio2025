import React from 'react';
import { FaDownload } from 'react-icons/fa';
import '../css/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      {/* resume header stated here */}
      <h2
        data-aos="fade-down"
        data-aos-duration="1400"
        className="resume-header"
        data-aos-once="true"
        data-aos-offset="100"
      >
        Resume
      </h2>

      {/* displaying resume image below */}
      <div className="resume-container">
        <img
          src={`${process.env.PUBLIC_URL}/Darla_Valderrama_2025_Resume copy.jpg`}
          alt="Darla Valderrama Resume"
          className="resume-image"
        />
      </div>

      {/* download button for rese */}
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
