import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/createproject.css';
import ProgressBar from '../components/ProgressBar';
import DataUpload from '../components/DataUpload';
import { Link } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader'; 

function CreateProject() {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState('');
  const [toolDescription, setToolDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const steps = ['Create Project', 'Dataset Editor', 'Dataset Automation', 'Recommended Models', 'Download Model'];

  const handleHomeClick = (e) => {
    const confirmNavigation = window.confirm('Are you sure you want to leave this page? Project will not be saved.');
    if (!confirmNavigation) {
      e.preventDefault(); 
    }
  };

  const handleNextButtonClick = async () => {
    setTitleError('');
    setDescriptionError('');
    setIsLoading(true); 

    let isValid = true;
    if (!projectTitle.trim()) {
      setTitleError('Please enter a project title.');
      isValid = false;
    }

    if (!toolDescription.trim()) {
      setDescriptionError('Please enter a tool description.');
      isValid = false;
    }

    if (!isValid) {
      setIsLoading(false); 
      return; 
    }

    try {
      const response = await axios.post('http://localhost:3001/api/projects', {
        projectTitle: projectTitle,
        toolDescription: toolDescription,
      });
      console.log(response.data);
      if (fileUploaded) {
        setIsLoading(false); 
        navigate('/dataevaluation', {state: {fileName: fileUploaded}});
      } else {
        setIsLoading(false); 
        alert("Please upload a file to proceed."); 
      }
    } catch (error) {
      setIsLoading(false); 
      console.error('Failed to create project:', error);
    }
  };

  const handleProjectTitleChange = (e) => {
    setProjectTitle(e.target.value);
    if (titleError && e.target.value.trim()) {
      setTitleError('');
    }
  };

  const handleToolDescriptionChange = (e) => {
    setToolDescription(e.target.value);
    if (descriptionError && e.target.value.trim()) {
      setDescriptionError('');
    }
  };

  return (
    <div className="createproject-container">
      {isLoading && (
          <div className="loading-spinner">
            <ClipLoader color="#36D7B7" loading={isLoading} size={55} />
          </div>
        )}
      <div className='progressBAR'>
      <ProgressBar currentStep={currentStep} steps={steps} />
      </div>

      <div className="createproject-top-section">
        <h2>Project Title</h2>
        <input
          type="text"
          placeholder="Enter project title"
          value={projectTitle}
          onChange={handleProjectTitleChange}
          className={`createproject-input ${titleError ? 'create-input-error' : ''}`}
        />
        {titleError && <div className="create-error-message">{titleError}</div>}
      </div>

      <div className="createproject-middle-section">
        <h2>What do you want your tool to do?</h2>
        <textarea
          placeholder="Enter tool description..."
          value={toolDescription}
          onChange={handleToolDescriptionChange}
          className={`createproject-textarea ${descriptionError ? 'create-input-error' : ''}`}
        />
        {descriptionError && <div className="create-error-message">{descriptionError}</div>}
        <h2>Upload a Dataset:</h2>
        <DataUpload onUploadSuccess={(fileName) => 
        {if (fileName) {setFileUploaded(fileName); 
        } else {
          setFileUploaded(null);}
        }}/>
      </div>
      <div className="createproject-bottom-section">
        <Link to="/home" onClick={handleHomeClick} className="createproject-button createproject-back-button">Back Home </Link>
        <button onClick={handleNextButtonClick} className="createproject-button">Continue to Dataset Editor</button>
      </div>
    </div>
  );
}

export default CreateProject;





