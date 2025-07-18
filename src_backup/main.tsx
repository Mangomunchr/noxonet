import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Test() {
  return <div className="bg-red-500 w-32 h-32"></div>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
