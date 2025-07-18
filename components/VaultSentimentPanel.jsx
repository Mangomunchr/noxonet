import React, { useEffect, useState } from 'react';

const VaultSentimentPanel = () => {
  const [sentiment, setSentiment] = useState(null);

  useEffect(() => {
    fetch('/api/vault-sentiment')
      .then(res => res.json())
      .then(data => setSentiment(data));
  }, []);

  if (!sentiment) return null;

  return (
    <div className="bg-emerald-950 text-emerald-300 p-4 rounded-xl border border-emerald-600">
      <h3 className="text-lg font-bold mb-2">💬 Vault Sentiment</h3>
      <p className="text-sm">
        Current Mood: <strong>{sentiment.mood}</strong> – {sentiment.message}
      </p>
    </div>
  );
};

export default VaultSentimentPanel;