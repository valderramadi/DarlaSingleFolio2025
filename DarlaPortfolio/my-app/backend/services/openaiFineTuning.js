// const axios = require('axios');
// const fs = require('fs');
// require('dotenv').config();
// const path = require('path');
// const FormData = require('form-data'); 
// const API_KEY = process.env.OPENAI_API_KEY;
// const filePath = path.join(__dirname, '..', 'saveDataset', 'output.jsonl');

// // Corrected function to upload a training file using multipart/form-data
// const uploadFile = async (filePath) => {
//   const formData = new FormData();
//   formData.append('file', fs.createReadStream(filePath));
//   formData.append('purpose', 'fine-tune'); // Assuming 'purpose' is a required field

//   // Log FormData entries .. added code testing
//   if (formData._streams) { // formData uses _streams to store internal data
//     formData._streams.forEach(item => {
//       if (typeof item === 'string') console.log(item);
//     });
//   }

//   try {
//     const response = await axios.post('https://api.openai.com/v1/files', formData, {
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         ...formData.getHeaders(), // Automatically sets the correct Content-Type
//       },
//     });
//     console.log('File uploaded successfully:', response.data);
//     return response.data.id; // Assuming the API returns an ID in the response
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     throw error;
//   }
// };
// // Function to create a fine-tuned model
// const createFineTuneJob = async (trainingFileId) => {
//   try {
//     const response = await axios.post('https://api.openai.com/v1/fine_tuning/jobs', {
//       training_file: trainingFileId,
//       model: 'gpt-3.5-turbo', // Replace with your desired model
//     }, {
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log('Fine-tune job created successfully:', response.data);
//     return response.data.id; // Return the job ID for further tracking
//   } catch (error) {
//     console.error('Error creating fine-tune job:', error);
//     throw error; // Rethrow to handle it in the calling context
//   }
// };

// // Main function to orchestrate the upload and fine-tuning
// const fineTuneModel = async () => {
//   try {
//     const fileId = await uploadFile(filePath); // Upload the training file
//     const jobId = await createFineTuneJob(fileId); // Create the fine-tuning job
//     console.log(`Fine-tuning job (${jobId}) started for file: ${fileId}`);
//   } catch (error) {
//     console.error('Error during fine-tuning process:', error);
//   }
// };

// // Execute the main function


// module.exports = {
//   fineTuneModel
// };
