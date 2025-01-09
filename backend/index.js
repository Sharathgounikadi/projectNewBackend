const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors()); // To allow cross-origin requests
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
  console.log(`Server is running on http://localhost:${PORT}`);
});
