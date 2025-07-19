
import React, { useState } from 'react';
import axios from 'axios';

export default function TestBurnlog() {
  const [response, setResponse] = useState(null);
  const ping = async () => {
    try {
      const res = await axios.get('/api/burnLog');
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Failed to reach burnLog' });
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <button onClick={ping}>Ping /api/burnLog</button>
      <pre>{{JSON.stringify(response, null, 2)}}</pre>
    </div>
  );
}
