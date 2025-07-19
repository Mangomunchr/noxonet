import React, { useEffect, useState } from 'react';

const RitualReadinessPanel = ({ userId }) => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetch(`/api/ritual-readiness/${userId}`)
      .then(res => res.json())
      .then(data => setStatus(data));
  }, [userId]);

  return (
    <div className="bg-sky-950 text-sky-200 p-4 border border-sky-600 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🧪 Ritual Readiness</h3>
      <ul className="text-sm space-y-1">
        {status.map((ritual, i) => (
          <li key={i}>
            {ritual.name}: {ritual.ready ? "✅ Ready" : "❌ Not Ready"} – {ritual.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RitualReadinessPanel;