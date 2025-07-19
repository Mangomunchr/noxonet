import React from 'react';

export default function VaultLogDownloadButton() {
  const handleDownload = () => {
    alert('Vault log exported (mock)');
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-gray-800 border border-gray-500 rounded-lg text-sm text-white hover:bg-gray-700"
    >
      ⬇️ Export Vault Logs
    </button>
  );
}