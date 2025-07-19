
import React, { useEffect, useState } from 'react';

export default function XPBoostFlash({ amount = 50 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="absolute top-6 right-6 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg animate-pulse z-50 shadow-xl">
      +{amount} XP
    </div>
  );
}
