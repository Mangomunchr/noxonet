
import React, { useState } from 'react';

export default function FlareTriggerPanel() {
  const [active, setActive] = useState(false);

  const handleTrigger = () => {
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  };

  return (
    <div className="p-4 bg-orange-900 text-white border border-orange-700 rounded-lg">
      <div className="text-sm uppercase text-orange-300">Flare Protocol</div>
      <button
        className="mt-2 w-full bg-orange-500 text-black py-2 rounded hover:bg-orange-400"
        onClick={handleTrigger}
      >
        {active ? "🔥 Flaring..." : "⚡ Cast Flare"}
      </button>
    </div>
  );
}
