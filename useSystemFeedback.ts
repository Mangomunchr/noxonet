import { useState } from 'react';

export function useSystemFeedback() {
  const [message, setMessage] = useState(null);

  const showToast = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 3000);
  };

  return {
    message,
    showToast,
    Toast: message ? (
      <div className="toast toast-top toast-center">
        <div className="alert alert-info">{message}</div>
      </div>
    ) : null,
  };
}