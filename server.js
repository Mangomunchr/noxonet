require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fallback to index.html

// Handle signup form submission
app.post('/signup', async (req, res) => {
  // Server-side validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const walletPattern = /^0x[a-fA-F0-9]{40}$/;
  if (!emailPattern.test(email) || !walletPattern.test(walletAddress)) {
    return res.status(400).send(`
      <h1>Validation Error</h1>
      <p>Invalid email or wallet address provided. Please go back and try again.</p>
      <a href="/signup.html">Back to Sign Up</a>
    `);
  }

  const { email, walletAddress } = req.body;
  console.log(`Signup received: ${email}, ${walletAddress}`);
  
  const vaultApi = process.env.VAULT_API_URL;
  try {
    const response = await axios.post(
      `${vaultApi}/users`,
      { email, walletAddress }
    );
    console.log('Vault response:', response.data);
    res.send(`
      <h1>Thank you for signing up, ${email}!</h1>
      <p>Your wallet ${walletAddress} has been registered successfully.</p>
      <a href="/">Back to Home</a>
    `);
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    res.status(500).send(`
      <h1>Registration Error</h1>
      <p>There was a problem signing you up. Please try again later.</p>
      <a href="/">Back to Home</a>
    `);
  }

  res.send(`
    <h1>Thank you for signing up, ${email}!</h1>
    <p>Your wallet ${walletAddress} is registered.</p>
    <a href="/">Back to Home</a>
  `);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NodeTemple live beta server running on port ${PORT}`);
});