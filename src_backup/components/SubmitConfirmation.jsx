
import React from 'react';
export default function SubmitConfirmation({ message }) {
  if (!message) return null;
  return <div className="text-green-300 mt-2">✅ {message}</div>;
}
