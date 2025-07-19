import React, { useState } from 'react';

export default function SummonModeToggle() {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    alert(`Summon Mode ${!enabled ? 'Activated ⚡' : 'Deactivated'}`);
  };

  return (
    <div className="mt-4">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={enabled}
          onChange={toggle}
          className="form-checkbox text-green-500"
        />
        <span className="text-sm text-white">Summon Mode</span>
      </label>
    </div>
  );
}
