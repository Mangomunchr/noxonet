import React, { useEffect, useState } from 'react';

const UserSettingsPanel = ({ userId }) => {
  const [settings, setSettings] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`/api/settings/${userId}`)
      .then(res => res.json())
      .then(data => setSettings(data));
  }, [userId]);

  const updateSetting = (key, value) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    fetch(`/api/settings/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    }).then(() => setStatus('Saved'));
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg border border-blue-400">
      <h3 className="text-lg font-bold mb-2">User Settings</h3>
      <label className="block mb-2">Theme:
        <select value={settings.theme || 'dark'} onChange={(e) => updateSetting('theme', e.target.value)} className="ml-2 p-1 bg-black text-white">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </label>
      <label className="block mb-2">Notifications:
        <input type="checkbox" checked={settings.notifications ?? true} onChange={(e) => updateSetting('notifications', e.target.checked)} className="ml-2"/>
      </label>
      {status && <div className="text-green-400 mt-2">{status}</div>}
    </div>
  );
};

export default UserSettingsPanel;