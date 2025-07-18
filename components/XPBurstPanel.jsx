import React, { useEffect, useState } from 'react';

const XPBurstPanel = () => {
  const [xp, setXp] = useState(null);

  useEffect(() => {
    fetch('/api/xp-burst')
      .then(res => res.json())
      .then(data => setXp(data));
  }, []);

  if (!xp) return null;

  return (
    <div className="bg-blue-950 text-blue-300 p-4 border border-blue-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">⚡ XP Burst Engine</h3>
      <p className="text-sm">Combo Level: <strong>{xp.comboLevel}</strong></p>
      <p className="text-sm">Burst State: <strong>{xp.burstState}</strong></p>
      <p className="text-sm">Multiplier: <strong>{xp.multiplier}x</strong></p>
    </div>
  );
};

export default XPBurstPanel;