
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Codex from './pages/Codex';
import Vault from './pages/Vault';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/codex" element={<RequireAuth><Codex /></RequireAuth>} />
        <Route path="/vault" element={<RequireAuth><Vault /></RequireAuth>} />
      </Routes>
    </Router>
  );
}

export default App;
