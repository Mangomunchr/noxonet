const express = require('express');
const router = express.Router();

let jobQueue = [];
let jobResults = {};

router.post('/submit', (req, res) => {
  const { fileUrl, prompt, userId } = req.body;
  const jobId = Date.now().toString();
  const job = { jobId, fileUrl, prompt, userId, status: 'queued' };
  jobQueue.push(job);
  res.json({ success: true, jobId });
});

router.get('/claim', (req, res) => {
  const nextJob = jobQueue.find(j => j.status === 'queued');
  if (!nextJob) return res.json({ success: false, message: 'No jobs available' });
  nextJob.status = 'claimed';
  res.json({ success: true, job: nextJob });
});

router.post('/complete', (req, res) => {
  const { jobId, userId, resultUrl } = req.body;
  jobResults[jobId] = { userId, resultUrl, completedAt: new Date().toISOString() };
  jobQueue = jobQueue.filter(j => j.jobId !== jobId);
  res.json({ success: true });
});

router.get('/results/:jobId', (req, res) => {
  const result = jobResults[req.params.jobId];
  if (!result) return res.status(404).json({ error: 'Result not found' });
  res.json(result);
});

module.exports = router;
