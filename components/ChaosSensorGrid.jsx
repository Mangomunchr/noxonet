import React, { useEffect, useState } from 'react';

const ChaosSensorGrid = () => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    fetch('/api/chaos-sensor-grid')
      .then(res => res.json())
      .then(data => setZones(data));
  }, []);

  return (
    <div className="bg-black text-green-300 border border-green-600 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">🌐 Chaos Sensor Grid</h3>
      <ul className="text-sm grid grid-cols-2 gap-1">
        {zones.map((zone, i) => (
          <li key={i}>
            <span className={\`font-mono \${zone.status === 'unstable' ? 'text-red-400' : 'text-green-400'}\`}>
              {zone.name}: {zone.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaosSensorGrid;