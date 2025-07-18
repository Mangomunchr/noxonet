import React, { useEffect, useState } from 'react';

const PatchNoteViewer = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/api/patch-notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl border border-blue-500">
      <h3 className="text-lg font-bold mb-3">📜 Patch Notes</h3>
      <ul className="space-y-2">
        {notes.map((note, i) => (
          <li key={i} className="text-sm">
            <span className="font-semibold text-blue-300">{note.version}</span> - {note.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatchNoteViewer;