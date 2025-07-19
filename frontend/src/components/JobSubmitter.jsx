import React, { useState } from 'react';

export default function JobSubmitter() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, url })
    });

    const data = await res.json();
    alert(data.message || '✅ Job Submitted');
    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h3 className="text-lg font-bold text-cyan-300">Submit Render Job</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Job Title"
        className="p-2 w-full rounded bg-gray-800 text-white"
        required
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Input File URL"
        className="p-2 w-full rounded bg-gray-800 text-white"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Upload Render Job
      </button>
    </form>
  );
}
