import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import { FaDownload, FaSave, FaPlusCircle } from 'react-icons/fa';
import ProgressBar from '../components/ProgressBar';
import '../css/dataeval.css';

function DataEvaluation({ fileName: fileNameProp }) {
  const navigate = useNavigate();
  const location = useLocation();
  const fileName = location.state?.fileName || fileNameProp;
  const [currentStep, setCurrentStep] = useState(2);
  const [dataset, setDataset] = useState([]);

  const handleNextButtonClick = () => {
    navigate('/automationprocess',  { replace: true });
  };

  const handleHomeClick = (e) => {
    const confirmNavigation = window.confirm(
      'Are you sure you want to leave this page? Project will not be saved.'
    );

    if (!confirmNavigation) {
      e.preventDefault();
    }
  };


  useEffect(() => {
    if (!fileName) return;

    const fetchDataset = async () => {
      try {
        const fileUrl = `http://localhost:3001/uploads/${fileName}`;
        const response = await axios.get(fileUrl, { responseType: 'blob' });

        const text = await response.data.text();
        Papa.parse(text, {
          complete: (result) => {
            setDataset(result.data);
          },
          header: true
        });
      } catch (error) {
        console.error('Error fetching dataset:', error);
      }
    };

    fetchDataset();
  }, [fileName]);

  const getCSVdata = () => {
    return Papa.unparse(dataset);
  };


  const saveToServer = async (csvData) => {
    const url = 'http://localhost:3001/saveDataset';
    try {
      const response = await axios.post(url, {
        csvData: csvData,
        fileName: fileName
      });
      console.log('Save successful:', response.data);
      handleNextButtonClick();
    } catch (error) {
      console.error('Error saving dataset:', error);
    }
  };
  

  const downloadCsv = (csvData) => {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dataEval-container">

      <div className='data-top-section'>
      <ProgressBar currentStep={currentStep} steps={[
        'Create Project', 'Dataset Editor', 'Dataset Automation',
        'Recommended Models', 'Download Model'
      ]} />
      </div>

      <div className='datasetHead'>
        <div className="headerContent">
          <h3>Uploaded Dataset: {fileName}</h3>
        </div>
        <div className='buttonsWrapper'>
          <div className="buttonsContainer">
            <button onClick={() => saveToServer(getCSVdata())} className="data-button-table">
              <FaSave /> Save to Server
            </button>
            <button onClick={() => downloadCsv(getCSVdata())} className="data-button-table">
              <FaDownload /> Download CSV
            </button>
            <button onClick={() => setDataset([...dataset, {}])} className="data-button-table">
              <FaPlusCircle /> Add Row
            </button>
          </div>
        </div>
      </div>

      <div className="tableContainer">
        <div className='scrollableContent'>
          {dataset.length > 0 ? (
            <table className="datasetTable">
              <thead>
                <tr>
                  {Object.keys(dataset[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataset.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.entries(row).map(([key, value], colIndex) => (
                      <td key={colIndex}>
                        <div
                          contentEditable={true}
                          className="editableCell"
                          onBlur={(e) => {
                          const updatedRow = { ...row, [key]: e.target.textContent };
                          const newDataset = [...dataset];
                          newDataset[rowIndex] = updatedRow;
                          setDataset(newDataset);
                    }}
                  >
                    {value}
                  </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <p>No data to display.</p>}
        </div>
      </div>

      <div className='BelowTableButtonContainer'>
       <Link to="/home" onClick={handleHomeClick} className="data-button data-home">Back Home </Link>
       <button onClick={handleNextButtonClick} className="data-button">
          Next
        </button>
      </div>



    </div>
  );
}

export default DataEvaluation;
