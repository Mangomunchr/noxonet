
import React, { useState } from 'react';
export default function PromptSender({ userId }) {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState('');
  const sendPrompt = async () => {
    setStatus('⏳ Sending...');
    try {
      const res = await fetch('https://noxo-backend.fly.dev/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, prompt })
      });
      const data = await res.json();
      setStatus(data?.message || '✅ Sent!');
    } catch (err) {
      setStatus('❌ Error sending prompt');
    }
  };
  return (
    <div className="p-4 bg-[#111] rounded-xl mt-6">
      <h2 className="text-green-300 text-lg mb-2">🧠 Send Prompt</h2>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="w-full h-24 p-2 bg-[#222] text-white rounded" placeholder="Type your render prompt..." />
      <button onClick={sendPrompt} className="mt-2 px-4 py-1 bg-green-600 text-white rounded">Submit</button>
      <div className="mt-2 text-sm text-green-400">{status}</div>
    </div>
  );
}
