import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import '../css/download.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

function DownloadModel() {
  const navigate = useNavigate();
  
  const handleGoToPlayground = () => {
    window.location.href = 'https://platform.openai.com/playground';
  };

  const handleDownloadJSONL = async () => {
    try {
      const response = await axios({
        url: 'http://localhost:3001/download/jsonl', // Ensure this URL is correct
        method: 'GET',
        responseType: 'blob', // Important for handling binary data for download
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.jsonl'); // Ensure the download attribute uses the correct file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to download dataset:', error);
    }
  };
  

  const handleHomeClick = (e) => {
    const confirmNavigation = window.confirm(
      'Are you sure you want to leave this page? Project will not be saved.'
    );
    }
  
  

  return (
    <div className="download-container">
      <div className="download-top-section">
        <ProgressBar currentStep={5} steps={['Create Project', 'Data Evaluation', 'Dataset Automation', 'Recommended Models', 'Download Model']} />
        </div>
      <div className="download-header">
        <h1>Download Now or Continue to FineTune! </h1>
      </div>

      <div className="download-buttons">
        <button onClick={handleGoToPlayground} className="download-button">
          Go to OpenAI Playground
        </button>
        <button onClick={handleDownloadJSONL} className="download-button">
          Download .JSONL File
        </button>
      </div>

      <div className="download-footer">
        <p>Thank you for choosing our AI model. 
           Elevate your project with cutting-edge artificial intelligence capabilities.
            <br />
            <br />
            <br />
           <Link to="/home" onClick={handleHomeClick} className="data-button data-home">Return to Home  </Link>
           </p>
           
      </div>
      
    
    </div>
  );
}

export default DownloadModel;