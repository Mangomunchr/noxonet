// src/components/RenderlingDashboard.tsx
import React from 'react';
import { usePlayerStore } from '../usePlayerStore';
import { Link } from 'react-router-dom';

export default function RenderlingDashboard() {
  const { xp, gainXP, promote } = usePlayerStore((s) => ({
    xp: s.xp,
    gainXP: s.gainXP,
    promote: s.promote,
  }));

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👶 Renderling Dashboard</h1>
      <p>Your XP: {xp}</p>
      <button onClick={() => gainXP(10)}>⚡ Gain 10 XP</button>
      <br /><br />
      <button
        onClick={() => promote()}
        disabled={xp < 100}
      >
        🚀 Apply for Promotion to Rendar
      </button>
      <br /><br />
      <ul>
        <li><Link to="/xp">📈 View XP Path</Link></li>
        <li><Link to="/shop">🛍️ Cool Beans Shop</Link></li>
      </ul>
    </div>
  );
}
