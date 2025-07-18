<<<<<<< HEAD
import React from 'react';

export default function RitualTrigger() {
  const handleTrigger = async () => {
    try {
      const res = await fetch('/api/ritual', { method: 'POST' });
      const result = await res.json();
      alert(`✨ Ritual Triggered: ${result.message || 'Blessed'}`);
    } catch (err) {
      alert('❌ Ritual Failed');
    }
  };

  return (
    <button
      onClick={handleTrigger}
      className="mt-2 px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded shadow"
    >
      🧿 Trigger Ritual
    </button>
  );
}
=======
// Chaos ritual logger trigger
>>>>>>> 865297188b33778ee0043fc41823c9663ae65614
