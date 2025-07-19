import React, { useEffect, useState } from 'react';

const NodeDisciplinePanel = ({ userId }) => {
  const [alignment, setAlignment] = useState(null);

  useEffect(() => {
    fetch(`/api/node-alignment/${userId}`)
      .then(res => res.json())
      .then(data => setAlignment(data));
  }, [userId]);

  if (!alignment) return null;

  return (
    <div className="bg-stone-950 text-stone-300 border border-stone-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🧠 Node Alignment</h3>
      <p className="text-sm">
        Alignment: <strong>{alignment.alignment}</strong> – Discipline Score: {alignment.discipline}/100
      </p>
      <p className="text-sm italic mt-1">{alignment.commentary}</p>
    </div>
  );
};

export default NodeDisciplinePanel;