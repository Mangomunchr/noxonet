const cors = require('cors');
app.use(cors());


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Vaultstrike backend is live!');
});

// Example vault route stub
app.use('/api/vault', require('./vaultcore/backend/vaultRouter.js'));

// Start server
app.listen(PORT, () => {
  console.log(`🔥 Vaultstrike server running on port ${PORT}`);
});
