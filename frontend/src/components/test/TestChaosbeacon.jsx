
import React, { useState } from 'react';
import axios from 'axios';

export default function TestChaosbeacon() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/chaosBeacon');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach chaosBeacon' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/chaosBeacon</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
