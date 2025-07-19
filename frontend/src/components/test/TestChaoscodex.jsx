
import React, { useState } from 'react';
import axios from 'axios';

export default function TestChaoscodex() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/chaosCodex');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach chaosCodex' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/chaosCodex</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
