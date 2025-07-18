const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const { startJobWorker } = require('./jobProcessor');

// Route imports
const vaultRoutes = require('./routes/vault');
const ritualRoutes = require('./routes/ritual');
const jobRoutes = require('./routes/jobs');
const userRoutes = require('./routes/user');
const leaderboardRoutes = require('./routes/leaderboard');
const nodeRoutes = require('./routes/nodes');
const warRoutes = require('./routes/war');
const logRoutes = require('./routes/logs');
const pingRoutes = require('./routes/ping');
const testRoutes = require('./routes/test');

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Attach routes
app.use('/api/vault', vaultRoutes);
app.use('/api/ritual', ritualRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/user', userRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/nodes', nodeRoutes);
app.use('/api/war', warRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/ping', pingRoutes);
app.use('/api/test', testRoutes);

// Start job worker
startJobWorker();

// Boot server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
