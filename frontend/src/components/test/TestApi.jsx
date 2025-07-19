
import React, { useState } from 'react';
import axios from 'axios';

export default function TestApi() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/api');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach api' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/api</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
