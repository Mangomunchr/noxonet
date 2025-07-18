import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const SubmitJobForm = () => {
  const { userId } = useUser();
  const [jobData, setJobData] = useState('');
  const [cost, setCost] = useState(100);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/submitJob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, jobData, cost }),
    });

    const data = await res.json();
    if (data.error) {
      setResponse(`❌ ${data.error}`);
    } else {
      setResponse(`✅ Job submitted. CoolBeans: ${data.newBalance}, XP: ${data.xp}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🛠️ Submit a Job</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          value={jobData}
          onChange={(e) => setJobData(e.target.value)}
          placeholder="Describe your render job..."
          style={styles.textarea}
        />
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          min={1}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          🚀 Submit
        </button>
      </form>
      {response && <p style={styles.response}>{response}</p>}
    </div>
  );
};

const styles = {
  container: {
    background: '#111',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 0 8px #00ff8877',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    background: '#222',
    color: '#eee',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    background: '#222',
    color: '#eee',
    width: '150px',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#00ff88',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  response: {
    marginTop: '1rem',
    color: '#0f0',
    fontSize: '0.95rem',
  },
};

export default SubmitJobForm;
