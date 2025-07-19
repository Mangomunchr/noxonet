import React, { useState } from 'react';

export default function SummonJobUI({ userId }) {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState('');

  const submitJob = async () => {
    const res = await fetch('http://localhost:3000/api/jobs/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, prompt, speed: 1, summonMultiplier: 1 })
    });
    if (res.ok) {
      setStatus('✅ Job Submitted');
      setPrompt('');
    } else {
      const data = await res.json();
      setStatus(`❌ ${data.error}`);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-yellow-600 space-y-2">
      <h2 className="text-yellow-300 font-bold">📨 Submit Render Job</h2>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter render prompt..."
        className="w-full px-3 py-2 bg-gray-800 text-white rounded"
      />
      <button onClick={submitJob} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
        Submit
      </button>
      {status && <div className="text-sm text-yellow-100">{status}</div>}
    </div>
  );
}