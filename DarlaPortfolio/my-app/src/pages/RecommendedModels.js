
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import '../css/model.css';
import { Link } from "react-router-dom";

function RecommendedModels() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(4); 
  const [activeOption, setActiveOption] = useState(null);

  const handleHomeClick = (e) => {
    const confirmNavigation = window.confirm('Are you sure you want to leave this page? Project will not be saved.');

    if (!confirmNavigation) {
      e.preventDefault(); 
    }
  };

  const handleNextButtonClick = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/projects/fine-tune', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },  // Add a comma here
            // No body needed if there's only one project being processed
        });

        if (!response.ok) {
            throw new Error('Failed to start fine-tuning process');
        }

        console.log('Fine-tuning process started');
        navigate('/downloadmodel');
    } catch (error) {
        console.error('Error:', error);
    }
};


  const models = [
    {
      name: 'GPT-3.5-Turbo-0125',
      pros: ['Faster response times', 'Cost-efficient'],
      cons: ['Less capable with complex tasks']
    },
    {
      name: 'GPT-4',
      pros: ['Highly versatile', 'Excellent at complex tasks'],
      cons: ['More expensive', 'Requires more resources']
    },
    {
      name: 'Llama 13B',
      pros: ['Great for multi-language support'],
      cons: ['Not as fine-tuned for specific tasks']
    },
    {
      name: 'Mistral 7B',
      pros: ['Lightweight model', 'Quick to deploy'],
      cons: ['Lower overall performance']
    }
  ];
  

  const handleOptionClick = (optionIndex) => {
    setActiveOption(optionIndex);
  };

  return (
    <div className="Models-Container">
      <div className="models-top-section">
        <ProgressBar currentStep={currentStep} steps={['Create Project', 'Data Evaluation', 'Dataset Automation', 'Recommended Models', 'Download Model']} />
      </div>
      <h2 className="pageHeader">Recommended Models for Fine-Tuning</h2>
      <div className='All-Options'>
        {models.map((model, index) => (
          <div 
            key={index}
            className={`options ${activeOption === index ? 'active' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            <h2>{model.name}</h2>
            <div>
              <strong>Pros:</strong>
              <ul>
                {model.pros.map(pro => <li key={pro}>{pro}</li>)}
              </ul>
              <strong>Cons:</strong>
              <ul>
                {model.cons.map(con => <li key={con}>{con}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="models-bottom-section">
        <Link to="/home" onClick={handleHomeClick} className="models-button models-back-button">Back Home</Link>
        <button onClick={handleNextButtonClick} className="models-button">Continue to Download Model</button>
      </div>
    </div>
  );
}

export default RecommendedModels;