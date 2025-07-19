import React, { useEffect, useState } from 'react';

const VaultBlessingPanel = () => {
  const [blessings, setBlessings] = useState([]);

  useEffect(() => {
    fetch('/api/vault-blessings')
      .then(res => res.json())
      .then(data => setBlessings(data));
  }, []);

  return (
    <div className="bg-emerald-950 text-emerald-200 border border-emerald-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🌿 Vault Blessings</h3>
      <ul className="text-sm space-y-1">
        {blessings.map((b, i) => (
          <li key={i}>
            {b.timestamp} – <strong>{b.type}</strong>: {b.effect}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VaultBlessingPanel;