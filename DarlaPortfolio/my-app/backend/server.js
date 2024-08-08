//Assigning const variables
const bcrypt = require('bcryptjs');
require('dotenv').config(); //loads enviroment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Cross-Origin Resource Sharing; React on port 3000, backend on 3001
const { Parser } = require('json2csv');

//connect to MongoDB
const connectDB = require('./dbconnection');
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Apply CORS middleware
app.use(cors()); 

// Log every request to the console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// For OpenAI Routes
const openaiRoutes = require('./Routes/api/openaiRoutes'); 
app.use('/api/openai', openaiRoutes);

// For dataset routes 
const datasetRoutes = require('./Routes/api/datasetRoutes')
app.use('/api/datasetRoutes', datasetRoutes)

// For user routes
const userRoutes = require('./Routes/api/userTest')
app.use('/api/userTest', userRoutes);

// For project creation routes
const projectRoutes = require('./Routes/api/projectRoutes');
app.use('/api/projects', projectRoutes);

app.post('/api/projects', async (req, res) => {
    try {
        const { projectTitle, toolDescription } = req.body;
        
        // Assume createProject handles database interaction
        const project = await createProject({ title: projectTitle, description: toolDescription });
        res.json(project);
    } catch (error) {
        console.error('Failed to create project:', error);
        // Send a more detailed error message for debugging
        res.status(500).send(`Failed to process the project: ${error.message}`);
    }
});

//connect to db asynchronous
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listens to requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

//dv- testing route
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to Querri app'});
});

const multer = require('multer');
const path = require('path');
const fs = require('fs');
app.use(cors());
app.use(express.json());

// Set up the storage engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Destination folder
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); // Use the original file name
    }
});

// Initialize multer with the storage engine
const upload = multer({ storage: storage });

// File upload route
app.post('/uploads', upload.single('file'), (req, res) => {
    console.log(req.file); 
    res.json({ success: true, fileName: req.file.originalname, url: `/uploads/${req.file.originalname}` });
});

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route to get the latest uploaded file's name and URL
app.get('/api/latest-upload', (req, res) => {
    const uploadsDir = path.join(__dirname, 'uploads');

    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error accessing upload directory');
        }

        if (files.length === 0) {
            return res.status(404).send('No files found');
        }

        // Sort files by modification time
        files.sort((a, b) => fs.statSync(path.join(uploadsDir, b)).mtime - fs.statSync(path.join(uploadsDir, a)).mtime);

        // Get the latest file
        const latestFile = files[0];
        res.json({ fileName: latestFile, url: `/uploads/${latestFile}` });
    });
});

// endpoint for saving datasets

const csvtojson = require('csvtojson');
const saveDatasetDir = path.join(__dirname, 'saveDataset');
if (!fs.existsSync(saveDatasetDir)) {
    fs.mkdirSync(saveDatasetDir, { recursive: true });
}

const outputJsonlFile = path.join(saveDatasetDir, 'output.jsonl');
app.post('/saveDataset', (req, res) => {
    const { csvData, fileName } = req.body;
    const filePath = path.join(saveDatasetDir, fileName);
    const jsonlFilePath = path.join(saveDatasetDir, fileName.replace('.csv', '.jsonl'));

    // Write the CSV data to a file first
    fs.writeFile(filePath, csvData, (writeErr) => {
        if (writeErr) {
            console.error('Failed to save CSV:', writeErr);
            return res.status(500).json({ message: "Failed to save dataset" });
        }
        console.log('CSV dataset saved to:', filePath);

        // Convert CSV to JSONL in chat-completion format
        csvtojson()
            .fromString(csvData)
            .then((jsonObj) => {
                const chatFormattedJson = jsonObj.map(entry => ({
                    messages: [
                        { role: 'user', content: entry.prompt },
                        { role: 'assistant', content: entry.completion }
                    ]
                }));
                const jsonlData = chatFormattedJson.map(entry => JSON.stringify(entry)).join('\n');

                // Save JSONL data to a new file and append to output.jsonl
                fs.writeFile(jsonlFilePath, jsonlData, (jsonlErr) => {
                    if (jsonlErr) {
                        console.error('Failed to save JSONL:', jsonlErr);
                        return res.status(500).json({ message: "Failed to convert and save JSONL" });
                    }
                    console.log('JSONL dataset saved to:', jsonlFilePath);

                    // Append to output.jsonl
                    fs.appendFile(outputJsonlFile, jsonlData + '\n', (appendErr) => {
                        if (appendErr) {
                            console.error('Failed to append JSONL:', appendErr);
                            return res.status(500).json({ message: "Failed to append data to output JSONL" });
                        }

                        // Read the updated output.jsonl to send back to front end
                        fs.readFile(outputJsonlFile, 'utf8', (readErr, data) => {
                            if (readErr) {
                                console.error('Failed to read output JSONL:', readErr);
                                return res.status(500).json({ message: "Failed to read output JSONL" });
                            }
                            const dataToSend = data.trim().split('\n').map(line => JSON.parse(line));
                            res.json({ success: true, data: dataToSend });
                        });
                    });
                });
            })
            .catch((conversionErr) => {
                console.error('Error converting CSV to JSON:', conversionErr);
                res.status(500).json({ message: "Failed to convert CSV to JSON" });
            });
    });
});

// serve the output.jsonl file
app.get('/saveDataset', (req, res) => {
    const outputJsonlPath = path.join(__dirname, 'saveDataset', 'output.jsonl');

    fs.readFile(outputJsonlPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Failed to read the output.jsonl file:', err);
            return res.status(500).json({ message: "Failed to read dataset" });
        }
        try {
            const dataset = data.split('\n')
                               .filter(line => line.trim())
                               .map(line => JSON.parse(line));
            res.json(dataset);
        } catch (parseError) {
            console.error('Error parsing JSONL data:', parseError);
            res.status(500).json({ message: "Error parsing dataset" });
        }
    });
});

app.get('/download/jsonl', (req, res) => {
    const jsonlFilePath = path.join(__dirname, 'saveDataset', 'output.jsonl');

    fs.readFile(jsonlFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Failed to read the .jsonl file:', err);
            return res.status(500).send('Server error');
        }

        // Set headers to suggest a file download
        res.setHeader('Content-Disposition', 'attachment; filename=output.jsonl');
        res.set('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});
