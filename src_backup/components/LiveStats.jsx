import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import axios from 'axios';

const LiveStats = () => {
  const { userId } = useUser();
  const [stats, setStats] = useState({ vault: 0, coolBeans: 0, xp: 0 });

  useEffect(() => {
    if (!userId) return;
    axios
      .get(`http://localhost:3000/api/stats?userId=${userId}`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error('Stats fetch failed:', err));
  }, [userId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📊 Live Stats</h2>
      <div style={styles.row}>
        <StatBlock label="💰 Vault" value={stats.vault} color="#00ffc3" />
        <StatBlock label="🫘 CoolBeans" value={stats.coolBeans} color="#ffee00" />
        <StatBlock label="🔥 XP" value={stats.xp} color="#ff6ad5" />
      </div>
    </div>
  );
};

const StatBlock = ({ label, value, color }) => (
  <div style={{ ...styles.block, borderColor: color }}>
    <h3 style={{ ...styles.label, color }}>{label}</h3>
    <p style={styles.value}>{value}</p>
  </div>
);

const styles = {
  container: {
    background: '#0a0a12',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 0 12px #00aaff33',
    marginBottom: '2rem',
  },
  header: {
    color: '#ccc',
    marginBottom: '1rem',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '1rem',
  },
  block: {
    flex: 1,
    padding: '1rem',
    border: '2px solid',
    borderRadius: '10px',
    background: '#111',
    textAlign: 'center',
  },
  label: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  value: {
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default LiveStats;
