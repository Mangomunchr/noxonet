<<<<<<< HEAD
// LoginScreen placeholder
=======
// frontend/src/ui/LoginScreen.tsx
import React, { useState } from 'react';

interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<LoginResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data: LoginResponse = await res.json();
      setResponse(data);
      if (!data.success) throw new Error(data.message || 'Login failed');
      // Optionally store token in localStorage or context
      localStorage.setItem('authToken', data.token!);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">🔒 NodeSoul Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-full max-w-xs p-3 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full max-w-xs p-3 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
      />
      <button
        onClick={handleLogin}
        disabled={loading}
        className={`px-6 py-3 rounded-full font-bold ${
          loading ? 'bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Logging in…' : 'Login'}
      </button>
      {error && <div className="mt-4 text-red-500">{error}</div>}
      {response && response.success && (
        <div className="mt-4 text-green-400">
          Login successful! Token stored.
        </div>
      )}
    </div>
);
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
