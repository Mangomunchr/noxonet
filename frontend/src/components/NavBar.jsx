
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-zinc-900 text-white p-3 flex gap-4 border-b border-zinc-700">
      <Link to="/" className="hover:underline">Dashboard</Link>
      <Link to="/jobs" className="hover:underline">Jobs</Link>
      <Link to="/welcome" className="hover:underline">Welcome</Link>
    </nav>
  );
}
