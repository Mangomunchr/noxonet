import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const CodexFeed = () => {
  const { authToken } = useAuth();
  const [log, setLog] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/codex/history', {
      headers: { Authorization: `Bearer ${authToken}` }
    })
      .then(res => res.json())
      .then(setLog);
  }, [authToken]);

  return (
    <div>
      <h3>Codex Log</h3>
      <ul>
        {log.map((entry, idx) => (
          <li key={idx}>[{entry.date}] {entry.type}: {entry.description} ({entry.xpChange} XP)</li>
        ))}
      </ul>
    </div>
  );
};

export default CodexFeed;