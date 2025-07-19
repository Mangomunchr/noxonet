import React from 'react';

export default function RetireMonkButton({ userId }) {
  const retire = async () => {
    await fetch("http://localhost:3000/api/user/retire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    });
    alert("🧘 You have entered NodeMonk Retirement Mode.");
  };

  return (
    <button onClick={retire} className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-400 text-white">
      🧘 Retire NodeMonk
    </button>
  );
}