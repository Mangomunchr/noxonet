CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  inputURL TEXT NOT NULL,
  status TEXT DEFAULT 'open',
  assignedTo TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
