import React, { useEffect, useState } from 'react';

const VaultContributionLog = ({ userId }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(`/api/vault-contributions/${userId}`)
      .then(res => res.json())
      .then(data => setEntries(data));
  }, [userId]);

  return (
    <div className="bg-gray-950 text-white p-4 border border-lime-500 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📊 Vault Contributions</h3>
      <ul className="text-sm space-y-1">
        {entries.map((e, i) => (
          <li key={i}>
            {e.timestamp} → {e.type} {e.amount} {e.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VaultContributionLog;