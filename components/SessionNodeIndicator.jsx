
import React from 'react';

const SessionNodeIndicator = ({ status }) => {
  const color = status === 'active' ? 'green' : 'gray';
  return (
    <div className={`p-2 rounded bg-${color}-800 text-white text-xs`}>
      {status === 'active' ? 'Node Active' : 'Node Idle'}
    </div>
  );
};

export default SessionNodeIndicator;
