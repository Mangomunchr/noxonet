import React, { useState } from 'react';

export default function EchoConsole() {
  const [logs, setLogs] = useState([]);
  const [command, setCommand] = useState('');

  const runCommand = () => {
    const output = `[echo] ${command}`;
    setLogs([...logs, output]);
    setCommand('');
  };

  return (
    <div className="p-4 bg-gray-900 border border-purple-500 rounded-xl text-purple-300 font-mono">
      <div className="text-lg font-bold text-purple-400 mb-2">🧙 Founder Echo Console</div>
      <div className="space-y-1">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
      <input
        className="mt-2 p-1 w-full bg-black border border-purple-500 text-white"
        placeholder="Enter command..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && runCommand()}
      />
    </div>
  );
}
