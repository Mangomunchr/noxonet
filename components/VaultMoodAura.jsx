import React, { useEffect, useState } from 'react';

const VaultMoodAura = () => {
  const [mood, setMood] = useState(null);

  useEffect(() => {
    fetch('/api/vault-mood')
      .then(res => res.json())
      .then(data => setMood(data));
  }, []);

  if (!mood) return null;

  return (
    <div className="bg-black text-center text-white p-4 rounded-xl border border-lime-400">
      <h3 className="text-lg font-bold mb-2">🌕 Vault Mood</h3>
      <p className="text-xl text-lime-300">{mood.name}</p>
      <p className="text-sm text-gray-400">{mood.description}</p>
    </div>
  );
};

export default VaultMoodAura;