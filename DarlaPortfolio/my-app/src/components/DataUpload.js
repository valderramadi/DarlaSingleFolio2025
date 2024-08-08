import React from "react";
import { useState } from 'react';
import axios from 'axios'; 

function DataUpload(props) {
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileUpload = async (event) => {
    if (event.target.files.length === 0) {
      console.error('No file selected.');
      setUploadMessage("No file selected.");
      props.onUploadSuccess(false); 
      return;
    }
  
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('http://localhost:3001/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Handle a successful upload
      if (response.data.success) {
        props.onUploadSuccess(response.data.fileName); // Indicate successful upload with the filename
        setUploadMessage("File uploaded successfully!");
      } else {
        // Handle case where the server responds but indicates failure
        props.onUploadSuccess(false);
        setUploadMessage("Failed to upload file.");
      }
    } catch (error) {
      console.error('Upload error:', error.response?.data);
      props.onUploadSuccess(false); // Handle error during upload
      setUploadMessage("Error during file upload.");
    }
  };
  

  return (
    <div className="DataUploadContainer">
      <br />
      <h4> Acceptable Format: .csv</h4>
      <br />
      <input type="file" onChange={handleFileUpload} />
      {uploadMessage && <p>{uploadMessage}</p>} 
    </div>
  );
}

export default DataUpload;
