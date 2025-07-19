
import React, { useState } from 'react';
import axios from 'axios';

export default function TestChaoslog() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/chaosLog');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach chaosLog' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/chaosLog</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
