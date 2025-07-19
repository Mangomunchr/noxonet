import React, { useEffect, useState } from 'react';

const DailyReward = ({ userId }) => {
  const [reward, setReward] = useState(null);

  useEffect(() => {
    fetch(\`/api/daily-reward/\${userId}\`)
      .then(res => res.json())
      .then(data => setReward(data));
  }, [userId]);

  if (!reward) return null;

  return (
    <div className="p-4 bg-amber-900 text-white border border-yellow-400 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🎉 Daily Login Reward</h3>
      <p>You’ve received: <strong>{reward.amount} XP</strong></p>
      <p>Streak: {reward.streak} day{reward.streak > 1 ? 's' : ''}</p>
    </div>
  );
};

export default DailyReward;