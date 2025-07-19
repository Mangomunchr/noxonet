import React, { useEffect, useState } from 'react';

const NotificationBanner = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('/api/alerts')
      .then(res => res.json())
      .then(data => setAlerts(data));
  }, []);

  if (!alerts.length) return null;

  return (
    <div className="bg-red-600 text-white p-2 text-center font-bold">
      {alerts.map((a, i) => (
        <div key={i}>🚨 {a.message}</div>
      ))}
    </div>
  );
};

export default NotificationBanner;