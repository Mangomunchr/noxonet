
import React, { useState } from 'react';

function SummonJobUI() {
  const [jobName, setJobName] = useState('');
  const [message, setMessage] = useState('');
  const [showXP, setShowXP] = useState(false);
  const [chaosMode, setChaosMode] = useState(false);

  const handleSummon = async () => {
    const rendarId = localStorage.getItem('rendarId');
    try {
      const res = await fetch('http://localhost:3001/api/summon-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobName, rendarId }),
      });
      const data = await res.json();
      setMessage(data.message);
      setShowXP(true);
      setTimeout(() => setShowXP(false), 2000);
      if (jobName.toLowerCase().includes('chaos') || jobName.toLowerCase().includes('ritual')) {
        setChaosMode(true);
        setTimeout(() => setChaosMode(false), 4000);
      }
    } catch (err) {
      setMessage('Failed to summon job.');
    }
  };

  return (
    <div className={"p-4 border rounded-xl transition-all duration-500 " + (chaosMode ? "border-pink-500 bg-black shadow-xl" : "border-green-400")}>
      <h2 className={"text-xl font-bold " + (chaosMode ? "text-pink-500 animate-pulse" : "")}>
        {chaosMode ? "🔥 CHAOS MODE ACTIVATED 🔥" : "Summon a Job"}
      </h2>
      <input
        type="text"
        value={jobName}
        onChange={(e) => setJobName(e.target.value)}
        placeholder="Job Name"
        className="mt-2 p-2 border rounded w-full text-black"
      />
      <button
        onClick={handleSummon}
        className={"mt-4 px-4 py-2 rounded " + (chaosMode ? "bg-pink-600 text-white" : "bg-green-500 text-white")}
      >
        Summon
      </button>
      {message && <p className="mt-2 text-sm text-yellow-300">{message}</p>}
      {showXP && (
        <div className="mt-4 text-green-300 text-lg font-bold animate-bounce">
          +137 XP!
        </div>
      )}
    </div>
  );
}

export default SummonJobUI;
