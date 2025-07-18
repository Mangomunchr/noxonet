
import React, { useState } from 'react';

export default function VaultPromptSender({ onSend }) {
  const [prompt, setPrompt] = useState('');

  const handleSend = () => {
    if (prompt.trim()) {
      onSend(prompt);
      setPrompt('');
    }
  };

  return (
    <div className="bg-zinc-900 border border-green-700 p-4 rounded-xl space-y-2">
      <h2 className="text-green-400 font-bold text-md">🧬 Prompt Sender</h2>
      <textarea
        className="w-full p-2 rounded-md bg-black text-white border border-zinc-700 resize-none"
        rows="3"
        placeholder="Type your codex render prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-2 rounded-xl w-full"
      >
        🌀 Send Prompt
      </button>
    </div>
  );
}
