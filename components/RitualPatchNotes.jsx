import React, { useEffect, useState } from 'react';

const RitualPatchNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/api/ritual-patch-notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <div className="bg-gray-950 text-gray-300 border border-gray-700 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">📓 Ritual Patch Notes</h3>
      <ul className="text-sm space-y-2">
        {notes.map((n, i) => (
          <li key={i}>
            <strong>{n.version}</strong> – {n.date}
            <ul className="ml-4 list-disc">
              {n.notes.map((line, j) => <li key={j}>{line}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RitualPatchNotes;