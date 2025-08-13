import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from client directory
app.use(express.static(path.join(__dirname, 'client')));

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Simple server running at http://localhost:${PORT}`);
  console.log('Open your browser and go to that URL');
});