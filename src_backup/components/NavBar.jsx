import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/welcome">Welcome</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
      </ul>
    </nav>
  );
}
