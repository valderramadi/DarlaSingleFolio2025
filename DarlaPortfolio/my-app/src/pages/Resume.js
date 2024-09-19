// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../css/Resume.css';

// const ResumePDF = '/Resume.pdf';  // Path to the PDF in the public folder

// const Resume = () => {
//   return (
//     <div id="resume">
//       <Navbar />
//       <div className="resume-container">
//         <object
//           data={ResumePDF}
//           type="application/pdf"
//           width="100%"
//           height="800px"
//         >
//           <p>Your browser does not support PDFs. <a href={ResumePDF} download="Resume_Darla.pdf">Download the PDF</a> instead.</p>
//         </object>
//       </div>
//       <div className="download-btn-container">
//         <a href={ResumePDF} download="Resume_Darla.pdf" className="download-btn">
//           <button>Download PDF</button>
//         </a>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Resume;


import React, { useRef, useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa'; 
import '../css/Resume.css'; 

function Resume() {
    const resumePDFPath = '/Resume.pdf';  // Path to your PDF in the public folder
    const resumeIMGPath = '/ResumeImage.webp';  // Path to your image in the public folder
    const sectionRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 10) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} className="resume-container">
            <div className="resume-header">
                <h2 className="resume-title">Resume</h2>
                {/* Sticky Download Button */}
                <button
                    className={`download-btn ${isSticky ? 'fixed-btn' : 'hidden'}`}
                >
                    <a
                        href={resumePDFPath}
                        download="Darla_Resume.pdf"
                        className="download-link"
                        title="Download Resume as PDF"
                    >
                        <FaDownload className="icon" />
                        <span>Download PDF</span>
                    </a>
                </button>
            </div>
            
            {/* Resume Image Preview */}
            <div className="resume-image-container">
                <img 
                    src={resumeIMGPath} 
                    alt="Darla's Resume" 
                    aria-label="Darla's Resume" 
                    className="resume-image"
                />
            </div>
        </div>
    );
}

export default Resume;
