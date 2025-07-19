import React, { useEffect, useState } from 'react';

const MangoWarVault = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/mango-war-vault')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <div className="bg-yellow-950 text-yellow-300 border border-yellow-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🥭 Mango War Vault</h3>
      <ul className="text-sm space-y-1">
        {entries.map((e, i) => (
          <li key={i}>
            #{i + 1} {e.username} — contributed {e.amount} 🍋
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangoWarVault;