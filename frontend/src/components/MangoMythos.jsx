import React, { useEffect, useState } from 'react';

const MangoMythos = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/mango-mythos')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <div className="bg-yellow-950 text-yellow-300 p-4 border border-yellow-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📖 Mango Mythos</h3>
      <ul className="text-sm space-y-2">
        {entries.map((entry, i) => (
          <li key={i}>
            <strong>{entry.title}</strong> – {entry.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangoMythos;