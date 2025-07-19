
import React, { useState } from 'react';
import axios from 'axios';

export default function TestAlerts() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/alerts');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach alerts' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/alerts</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
