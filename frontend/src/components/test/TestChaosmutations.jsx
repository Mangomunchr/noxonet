
import React, { useState } from 'react';
import axios from 'axios';

export default function TestChaosmutations() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/chaosMutations');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach chaosMutations' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/chaosMutations</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
