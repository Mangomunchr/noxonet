
import React, { useState } from 'react';
import axios from 'axios';

export default function TestChaos() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/chaos');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach chaos' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/chaos</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
