const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jobsRoute = require('./routes/jobs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/jobs', jobsRoute);

app.get('/', (req, res) => res.send('NOXO Backend API Running'));

app.listen(PORT, () => {
  console.log(`✅ NOXO backend live on http://localhost:${PORT}`);
});
