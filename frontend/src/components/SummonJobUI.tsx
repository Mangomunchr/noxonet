import React, { useState } from 'react';

export default function SummonJobUI({ onSubmit }) {
  const [prompt, setPrompt] = useState("");

  const handleSummon = () => {
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt("");
    }
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold text-cyan-400">⚡ Summon Render Job</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your visual or task..."
        className="w-full p-2 mt-2 rounded text-black"
      />
      <button
        onClick={handleSummon}
        className="mt-3 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
      >
        Summon
      </button>
    </div>
  );
}