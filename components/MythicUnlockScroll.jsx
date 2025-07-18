import React, { useEffect, useState } from 'react';

const MythicUnlockScroll = ({ userId }) => {
  const [scrolls, setScrolls] = useState([]);

  useEffect(() => {
    fetch(`/api/mythic-scrolls/${userId}`)
      .then(res => res.json())
      .then(data => setScrolls(data));
  }, [userId]);

  return (
    <div className="bg-purple-950 text-purple-300 p-4 border border-purple-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📜 Mythic Unlock Scrolls</h3>
      <ul className="text-sm space-y-2">
        {scrolls.map((s, i) => (
          <li key={i}>
            <strong>{s.name}</strong> — {s.status === "unlocked" ? "✅ Unlocked" : "🔒 Locked"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MythicUnlockScroll;