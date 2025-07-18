<<<<<<< HEAD
// SettingsPanel placeholder
=======
// frontend/src/ui/SettingsPanel.tsx
import React, { useState } from 'react';

export default function SettingsPanel() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-4 bg-gray-800/30 rounded-lg text-gray-200 max-w-sm mx-auto">
      <h3 className="text-xl font-semibold mb-3 text-gray-100">⚙️ Settings</h3>
      <div className="mb-3 flex justify-between items-center">
        <label>Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(d => !d)}
        />
      </div>
      <div className="mb-3 flex justify-between items-center">
        <label>Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(n => !n)}
        />
      </div>
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
