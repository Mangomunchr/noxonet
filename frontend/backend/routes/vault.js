const express = require('express');
const router = express.Router();
const { getVaultSnapshot } = require('../logic/vaultEngine');

router.get('/vault/status', (req, res) => {
  res.json(getVaultSnapshot());
});

module.exports = router;