<<<<<<< HEAD
// XPProgressBar placeholder
=======
// frontend/src/ui/XPProgressBar.tsx
import React from 'react';

interface XPProgressBarProps {
  progress?: number; // percentage 0–100
}

export default function XPProgressBar({ progress = 60 }: XPProgressBarProps) {
  return (
    <div className="w-full bg-gray-800 rounded-full overflow-hidden h-4">
      <div
        className="h-full bg-green-400 transition-width duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
