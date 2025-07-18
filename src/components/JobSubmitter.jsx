import React, { useState } from 'react';

export default function JobSubmitter() {
  const [title, setTitle] = useState('');
  const [inputURL, setInputURL] = useState('');

  const submitJob = async () => {
    await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, inputURL })
    });
    setTitle('');
    setInputURL('');
    alert('Job submitted!');
  };

  return (
    <div className="p-4 border border-cyan-500 rounded-xl text-cyan-300 space-y-2">
      <div className="text-lg font-bold text-cyan-400">Submit Render Job</div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job title" className="w-full p-1 bg-black border border-cyan-400"/>
      <input value={inputURL} onChange={e => setInputURL(e.target.value)} placeholder="Input file URL" className="w-full p-1 bg-black border border-cyan-400"/>
      <button onClick={submitJob} className="px-4 py-1 border border-cyan-500 hover:bg-cyan-500 hover:text-black">Submit</button>
    </div>
  );
}
