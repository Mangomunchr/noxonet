const express = require('express');
const router = express.Router();
const { getLeaderboard } = require('../logic/leaderboardEngine');

router.get('/leaderboard', (req, res) => {
  res.json(getLeaderboard());
});

module.exports = router;