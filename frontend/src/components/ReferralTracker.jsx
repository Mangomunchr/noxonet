import React, { useEffect, useState } from 'react';

const ReferralTracker = ({ userId }) => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    fetch(`/api/referrals/${userId}`)
      .then(res => res.json())
      .then(data => setReferrals(data));
  }, [userId]);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg border border-pink-500">
      <h3 className="text-lg font-bold mb-2">🎁 Your Referrals</h3>
      {referrals.length === 0 ? (
        <p>No referrals yet. Share your code to earn rewards!</p>
      ) : (
        <ul className="text-sm space-y-1">
          {referrals.map((r, i) => (
            <li key={i}>
              {r.username} joined on {new Date(r.joined).toLocaleDateString()} – {r.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReferralTracker;