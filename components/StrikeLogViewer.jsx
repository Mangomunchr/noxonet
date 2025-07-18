import React, { useEffect, useState } from 'react';

const StrikeLogViewer = ({ userId }) => {
  const [strikes, setStrikes] = useState([]);

  useEffect(() => {
    fetch(`/api/strike-log/${userId}`)
      .then(res => res.json())
      .then(data => setStrikes(data));
  }, [userId]);

  return (
    <div className="bg-red-950 text-red-300 border border-red-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">⚠️ Strike Log</h3>
      <ul className="text-sm space-y-1">
        {strikes.map((s, i) => (
          <li key={i}>
            {s.timestamp} — {s.reason} ({s.severity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrikeLogViewer;