<<<<<<< HEAD
// SignupAwakening placeholder
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupAwakening() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [referral, setReferral] = useState('');
  const [error, setError]       = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    // 1) Sign up the user
    const signupRes = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!signupRes.ok) {
      setError('Signup failed');
      return;
    }
    const { userId } = await signupRes.json();

    // 2) Claim referral if provided
    if (referral.trim()) {
      await fetch('/api/referrals/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': userId
        },
        body: JSON.stringify({ code: referral.trim() })
      });
    }

    // 3) Fire signup analytics event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'signup_complete',
      referralRate: localStorage.getItem(STORAGE_KEY)
    });

    // 4) Redirect to welcome page
    navigate('/welcome');
  }

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Referral code (optional)"
        value={referral}
        onChange={e => setReferral(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
