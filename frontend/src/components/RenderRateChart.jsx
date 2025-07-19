
import React from 'react';

export default function RenderRateChart({ ratePerHour }) {
  return (
    <div className="p-3 bg-black border border-green-500 text-green-300 text-xs rounded-lg">
      ⚙️ Render Rate: {ratePerHour} jobs/hr
    </div>
  );
}
