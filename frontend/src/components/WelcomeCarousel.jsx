import React, { useState } from 'react';

const slides = [
  { title: 'Welcome to NOXO', text: 'A mythic GPU swarm powered by Vaults and Rituals.' },
  { title: 'Earn as a NodeMonk', text: 'Share your GPU power and earn Vault rewards.' },
  { title: 'Summon Renders Fast', text: 'Rendars submit jobs and get results in minutes.' },
];

export default function WelcomeCarousel({ onFinish }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
    else onFinish();
  };

  return (
    <div className="bg-black text-white p-6 rounded-xl border border-gray-700 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">{slides[index].title}</h2>
      <p className="mb-4 text-sm text-gray-300">{slides[index].text}</p>
      <button onClick={next} className="bg-green-500 w-full py-2 rounded-lg">
        {index === slides.length - 1 ? 'Enter Network' : 'Next'}
      </button>
    </div>
  );
}