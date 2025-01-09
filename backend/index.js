const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000; // Dynamic port for cloud deployment

// Enable CORS for the new frontend URL
app.use(cors({
  origin: 'https://project-new-backend.vercel.app',  // Allow requests only from this frontend URL
  methods: ['GET', 'POST'],  // Ensure these methods are allowed
}));


app.use(bodyParser.json()); // To parse JSON body

// In-memory database to hold data (for simplicity)
let data = [];

// Endpoint to fetch data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Endpoint to add data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json(newData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // For local testing
});
