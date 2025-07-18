<<<<<<< HEAD
// EchoPanel placeholder
=======
// frontend/src/ui/EchoPanel.tsx
import React, { useEffect, useState } from 'react';

interface EchoEntry {
  id: string;
  prompt: string;
  response: string;
  votes: number;
}

export default function EchoPanel() {
  const [entries, setEntries] = useState<EchoEntry[]>([]);
  const [input, setInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/echo/entries')
      .then(res => res.json())
      .then(setEntries)
      .catch(err => setError(err.message));
  }, []);

  const submitPrompt = () => {
    if (!input.trim()) return;
    setSubmitting(true);
    fetch('http://localhost:4000/api/echo/prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    })
      .then(res => res.json())
      .then((newEntry: EchoEntry) => {
        setEntries([newEntry, ...entries]);
        setInput('');
      })
      .catch(err => setError(err.message))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="p-6 bg-teal-800/20 rounded-xl shadow-lg text-teal-200">
      <h2 className="text-2xl font-bold mb-4">🧠 Echo Oracle</h2>

      <div className="mb-4">
        <textarea
          rows={3}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask the Echo for a lore hint..."
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
        />
        <button
          onClick={submitPrompt}
          disabled={submitting}
          className={`mt-2 px-4 py-2 rounded ${submitting ? 'bg-gray-600' : 'bg-teal-500 hover:bg-teal-600'}`}
        >
          {submitting ? 'Asking…' : 'Submit Prompt'}
        </button>
      </div>

      {error && <div className="text-red-400 mb-4">{error}</div>}

      <div className="space-y-4 max-h-64 overflow-y-auto">
        {entries.map(e => (
          <div key={e.id} className="p-3 bg-teal-900/30 rounded-lg">
            <div className="mb-1 italic">“{e.prompt}”</div>
            <div className="mb-1 pl-4 border-l-2 border-teal-500">{e.response}</div>
            <div className="text-sm text-gray-400">Votes: {e.votes}</div>
          </div>
        ))}
      </div>
    </div>
);
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
