// src/components/XPLevelPath.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function XPLevelPath() {
  const xp = usePlayerStore((s) => s.xp);
  const role = usePlayerStore((s) => s.role);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📈 XP Level Path</h1>
      <p>Role: <strong>{role}</strong></p>
      <p>XP: <strong>{xp}</strong> / 100</p>
      <div style={{ width: '100%', background: '#eee', height: '16px', marginTop: '1rem' }}>
        <div
          style={{
            width: `${Math.min(xp, 100)}%`,
            background: '#4caf50',
            height: '100%',
            transition: 'width 0.3s',
          }}
        />
      </div>

      <br />
      <Link to="/">← Back to Dashboard</Link>
    </div>
  );
}
