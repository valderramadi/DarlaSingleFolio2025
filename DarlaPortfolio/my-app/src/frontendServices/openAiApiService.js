// openAiApiService.js
import axios from 'axios';

const testExport = () => "test success";

const BASE_URL = 'http://localhost:3001/api';

const generateSamples = async (projectData) => {
  try {
    const response = await axios.post(`${BASE_URL}/generate-samples`, projectData);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch generated samples:', error);
    throw error;
  }
};

// Exporting an object containing all functions as a default export
export default { generateSamples, testExport };
