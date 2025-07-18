import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const UserSwitcher = () => {
  const { userId, setUserId } = useUser();
  const [input, setInput] = useState('');

  const handleSwitch = () => {
    if (!input.trim()) return;
    setUserId(input.trim());
    setInput('');
  };

  return (
    <div style={styles.container}>
      <h2>👤 Current Rendar: <span style={styles.userId}>{userId || 'None'}</span></h2>
      <div style={styles.controls}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new user ID"
          style={styles.input}
        />
        <button onClick={handleSwitch} style={styles.button}>
          🔄 Switch
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#111',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 0 8px #00aaff66',
    marginBottom: '2rem',
  },
  controls: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    background: '#222',
    color: '#eee',
    flex: 1,
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#00aaff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  userId: {
    color: '#0f0',
  },
};

export default UserSwitcher;
