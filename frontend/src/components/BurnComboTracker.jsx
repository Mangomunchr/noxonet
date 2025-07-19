import React, { useEffect, useState } from 'react';

const BurnComboTracker = () => {
  const [combo, setCombo] = useState(null);

  useEffect(() => {
    fetch('/api/combo')
      .then(res => res.json())
      .then(data => setCombo(data));
  }, []);

  if (!combo) return null;

  return (
    <div className="bg-orange-950 text-orange-300 p-4 rounded-xl border border-orange-600">
      <h3 className="text-lg font-bold mb-2">🔥 Burn Combo Tracker</h3>
      <p>🔥 Burns in a Row: <strong>{combo.burnsInRow}</strong></p>
      <p>🎁 Bonus: <strong>{combo.currentBonus}</strong></p>
      <p>Status: {combo.state}</p>
    </div>
  );
};

export default BurnComboTracker;