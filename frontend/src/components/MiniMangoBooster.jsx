import React, { useState } from 'react';

export default function MiniMangoBooster({ userId }) {
  const [count, setCount] = useState(0);

  const boost = async () => {
    await fetch("http://localhost:3000/api/ritual/mango", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    });
    setCount(c => c + 1);
  };

  return (
    <div className="bg-yellow-100 text-black p-4 rounded-xl border border-yellow-400">
      <div>Mini Mangos Offered: {count}</div>
      <button onClick={boost} className="mt-2 bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-300">
        🍈 Offer Mango
      </button>
    </div>
  );
}