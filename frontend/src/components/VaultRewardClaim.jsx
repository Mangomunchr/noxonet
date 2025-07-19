import React, { useEffect, useState } from 'react';

const VaultRewardClaim = ({ userId }) => {
  const [rewards, setRewards] = useState([]);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    fetch(`/api/vault-rewards/${userId}`)
      .then(res => res.json())
      .then(data => setRewards(data));
  }, [userId]);

  const handleClaim = () => {
    fetch(`/api/vault-rewards/${userId}/claim`, { method: 'POST' })
      .then(() => setClaimed(true));
  };

  if (!rewards.length) return null;

  return (
    <div className="bg-lime-950 text-lime-300 border border-lime-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">💰 Vault Rewards</h3>
      {!claimed ? (
        <>
          <ul className="text-sm mb-2">
            {rewards.map((r, i) => (
              <li key={i}>+{r.amount} {r.unit}</li>
            ))}
          </ul>
          <button onClick={handleClaim} className="px-4 py-1 bg-lime-600 text-white rounded hover:bg-lime-700">
            Claim All
          </button>
        </>
      ) : (
        <p className="text-sm italic">✅ Rewards claimed.</p>
      )}
    </div>
  );
};

export default VaultRewardClaim;