import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from '../components/ProgressBar';
import "../css/auto.css";

function AutomationProcess() {
  const navigate = useNavigate();
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/saveDataset');
        if (response.data) {
          // Filter out 'system' role messages from each entry
          const filteredData = response.data.map(entry => ({
            ...entry,
            messages: entry.messages.filter(message => message.role !== 'system')
          }));
          setDataset(filteredData);
        } else {
          setDataset([]);
        }
      } catch (error) {
        console.error('Failed to fetch dataset:', error);
        setDataset([]);
      }
    };
  
    fetchData();
  }, []);

  const handleUpdateDataset = (index, role, content) => {
    const updatedDataset = dataset.map((item, idx) => {
      if (idx === index) {
        const updatedMessages = item.messages.map(message => {
          if (message.role === role) {
            return { ...message, content: content };
          }
          return message;
        });
        return { ...item, messages: updatedMessages };
      }
      return item;
    });
    setDataset(updatedDataset);
  };

  const handleNextButtonClick = () => {
    navigate('/recommendedmodels');
  };

  const handleHomeClick = (e) => {
    const confirmNavigation = window.confirm(
      'Are you sure you want to leave this page? Project will not be saved.'
    );

    if (!confirmNavigation) {
      e.preventDefault();
    }
  };


  return (
    <div className="AutomationContainer">

      <div className='auto-top-section'>
      <ProgressBar currentStep={3} steps={['Create Project', 'Data Evaluation', 'Dataset Automation', 'Recommended Models', 'Download Model']} />
      </div>

      <div className='autosetHead'>
      <h3> Based on your uploaded dataset, the system is able to generate additional data automatically </h3>
      </div>

      <div className='datasetTableContainer'>
        <div className='AutoScrollableContent'>
        <table className='AutoDatasetTable'>
          <thead>
            <tr>
              <th>Prompt</th>
              <th>Completion</th>
            </tr>
          </thead>
          <tbody>
            {dataset.map((data, index) => (
              <tr key={index}>
              <td>
              <div
                contentEditable={true}
                className="editableCell"
                onBlur={(e) => handleUpdateDataset(index, 'user', e.target.textContent)}
              >
                {data.messages[0].content}
              </div>
            </td>
            <td>
              <div
                contentEditable={true}
                className="editableCell"
                onBlur={(e) => handleUpdateDataset(index, 'assistant', e.target.textContent)}
              >
                {data.messages[1].content}
              </div>
            </td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className='Auto-Bottom-Section'>
       <Link to="/home" onClick={handleHomeClick} className="auto-button auto-home">Back Home </Link>
       <button onClick={handleNextButtonClick} className="auto-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default AutomationProcess;
