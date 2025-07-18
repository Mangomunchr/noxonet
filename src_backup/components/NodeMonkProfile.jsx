
import React from 'react';
export default function NodeMonkProfile({ name, rank }) {
  return (
    <div className="bg-[#222] p-4 rounded-lg mb-4 text-white">
      <h2 className="text-xl font-bold text-green-400">🧘 NodeMonk Profile</h2>
      <p>Username: {name}</p>
      <p>Rank: {rank}</p>
    </div>
  );
}
