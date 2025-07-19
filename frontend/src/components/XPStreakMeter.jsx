import React from 'react';

const XPStreakMeter = ({ streak }) => {
  const maxStreak = 5;
  return (
    <div className="flex flex-col items-start p-4 text-white">
      <h4 className="font-bold mb-2">🔥 XP Streak</h4>
      <div className="flex gap-2">
        {[...Array(maxStreak)].map((_, i) => (
          <div
            key={i}
            className={\`w-4 h-4 rounded-full \${i < streak ? 'bg-orange-400' : 'bg-gray-600'}\`}
          />
        ))}
      </div>
      <p className="mt-2 text-sm">{streak} / {maxStreak} Active</p>
    </div>
  );
};

export default XPStreakMeter;