import React, { useEffect, useState } from 'react';

const GlobalEventBanner = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch('/api/global-event')
      .then(res => res.json())
      .then(data => setEvent(data));
  }, []);

  if (!event || !event.active) return null;

  return (
    <div className="bg-purple-900 text-white p-3 rounded-xl border border-fuchsia-500 text-center shadow-md">
      <h3 className="text-lg font-bold">🌐 {event.name}</h3>
      <p className="text-sm">{event.description}</p>
    </div>
  );
};

export default GlobalEventBanner;