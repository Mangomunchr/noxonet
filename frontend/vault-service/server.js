// vault-service/server.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// In-memory stores for demo; replace with real DB
const users = {};
const resetTokens = {};
const nodes = [
  { id: 1, lat: 37.7749, lng: -122.4194 }, // San Francisco
  { id: 2, lat: 51.5074, lng: -0.1278 }    // London
];
const jobs = [];

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1. POST /users — create user
app.post('/users', (req, res) => {
  const { email, password, verifyToken } = req.body;
  if (!email || !password || !verifyToken) return res.status(400).send('Missing fields');
  users[email] = { email, password, verified: false, verifyToken };
  return res.status(201).send('User created');
});

// 2. POST /verify — verify token
app.post('/verify', (req, res) => {
  const { token } = req.body;
  const user = Object.values(users).find(u => u.verifyToken === token);
  if (!user) return res.status(400).send('Invalid token');
  user.verified = true;
  delete user.verifyToken;
  return res.send('Email verified');
});

// 3. POST /password-reset — initiate reset
app.post('/password-reset', (req, res) => {
  const { email, token } = req.body;
  if (!users[email]) return res.status(404).send('User not found');
  resetTokens[token] = email;
  return res.send('Reset token stored');
});

// 4. PUT /password-reset — complete reset
app.put('/password-reset', (req, res) => {
  const { token, password } = req.body;
  const email = resetTokens[token];
  if (!email) return res.status(400).send('Invalid token');
  users[email].password = password;
  delete resetTokens[token];
  return res.send('Password updated');
});

// 5. GET /nodes — list nodes
app.get('/nodes', (req, res) => {
  return res.json(nodes);
});

// 6. GET /heatmap — heat data
app.get('/heatmap', (req, res) => {
  const points = nodes.map(n => [n.lat, n.lng, Math.random()]);
  return res.json(points);
});

// 7. POST /jobs — submit job
app.post('/jobs', (req, res) => {
  const { jobName, description, intensity } = req.body;
  if (!jobName || !description) return res.status(400).send('Missing fields');
  const job = { id: jobs.length + 1, jobName, description, intensity, status: 'queued' };
  jobs.push(job);
  return res.send(`Job "${jobName}" queued`);
});

// 8. GET /dashboard — stats
app.get('/dashboard', (req, res) => {
  const email = req.query.email;
  if (!users[email]) return res.status(404).send('User not found');
  return res.json({ hoursRented: 120, totalEarned: 3.5, activeNodes: nodes.length });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Vault-service API running on port ${PORT}`));
