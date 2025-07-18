const express = require('express');
const router = express.Router();

// Sample GET route
router.get('/rate', (req, res) => {
  res.json({
    vaultRate: 0.0083,
    message: 'Vault rate retrieved successfully.'
  });
});

// Sample POST job submission
router.post('/job', (req, res) => {
  const { jobSize, coolBeansUsed } = req.body;
  const payout = jobSize * 0.0083 + (coolBeansUsed || 0) * 0.002;
  res.json({
    success: true,
    payout,
    message: 'Job submitted to Vault successfully.'
  });
});

module.exports = router;
