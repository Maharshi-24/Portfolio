const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve node_modules for local libraries
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});