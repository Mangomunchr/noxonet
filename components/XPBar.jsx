import React from 'react';

const XPBar = ({ xp, level }) => {
  const percent = Math.min((xp % 100) / 100 * 100, 100);
  return (
    <div className="bg-gray-800 w-full rounded-lg p-1">
      <div className="text-sm text-white mb-1">Level {level}</div>
      <div className="w-full bg-gray-600 h-4 rounded">
        <div
          className="bg-green-400 h-4 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="text-right text-xs text-green-200">{xp} XP</div>
    </div>
  );
};

export default XPBar;