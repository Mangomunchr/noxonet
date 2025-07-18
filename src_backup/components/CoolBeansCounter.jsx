
import React from 'react';
export default function CoolBeansCounter({ count }) {
  return (
    <div className="mt-4 bg-[#222] text-green-300 p-2 rounded-md text-center">
      🫘 CoolBeans Earned Today: <strong>{count}</strong>
    </div>
  );
}
