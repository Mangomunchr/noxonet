import React, { useEffect, useState } from 'react';

const InviteCodePanel = ({ userId }) => {
  const [code, setCode] = useState('');
  const [used, setUsed] = useState([]);

  useEffect(() => {
    fetch(`/api/invite-code/${userId}`)
      .then(res => res.json())
      .then(data => {
        setCode(data.code);
        setUsed(data.used || []);
      });
  }, [userId]);

  return (
    <div className="p-4 bg-slate-900 text-white border border-pink-500 rounded-lg">
      <h3 className="text-lg font-bold mb-2">📨 Invite Code</h3>
      <p>Your code: <span className="font-mono text-pink-300">{code}</span></p>
      <h4 className="mt-3 font-semibold">Used By:</h4>
      {used.length === 0 ? <p className="text-sm text-gray-400">No one yet.</p> :
        <ul className="text-sm list-disc ml-5 mt-1">
          {used.map((u, i) => <li key={i}>{u}</li>)}
        </ul>}
    </div>
  );
};

export default InviteCodePanel;