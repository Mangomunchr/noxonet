<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import VaultConsole from './VaultConsole';
// import PatchnoteRitual from "./PatchnoteRitual";
// import NodeMonkDashboard from "./NodeMonkDashboard";
// import RendarDashboard from "./RendarDashboard";
// import DailyRitualBoard from "./DailyRitualBoard";
// import DevRoleSwitcher from "./DevRoleSwitcher";
// import RefundPanel from "./RefundPanel";
// import Wallet from "./Wallet";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VaultConsole />} />
        {/* <Route path="/patchnotes" element={<PatchnoteRitual />} />
        <Route path="/nodemonk" element={<NodeMonkDashboard />} />
        <Route path="/rendar" element={<RendarDashboard />} />
        <Route path="/ritualboard" element={<DailyRitualBoard />} />
        <Route path="/role" element={<DevRoleSwitcher />} />
        <Route path="/refund" element={<RefundPanel />} />
        <Route path="/wallet" element={<Wallet />} /> */}
      </Routes>
    </Router>
  );
}
=======
<<<<<<< HEAD

import React, { useState } from 'react';
import VaultAuraIndicator from './components/VaultAuraIndicator';
import XPTracker from './components/XPTracker';
import SummonMultiplierPicker from './components/SummonMultiplierPicker';
import NodeHeatmapLite from './components/NodeHeatmapLite';
import StreakMeter from './components/StreakMeter';
import SessionNodeIndicator from './components/SessionNodeIndicator';
import NodePingStatus from './components/NodePingStatus';
import VaultHeartbeatSignal from './components/VaultHeartbeatSignal';

export default function App() {
  const [multiplier, setMultiplier] = useState(10);
  const fakeNodes = new Array(16).fill(0).map((_, i) => ({ available: i % 2 === 0 }));

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6 font-mono">
      <h1 className="text-2xl font-bold">NOXO Codex Interface</h1>

      <VaultAuraIndicator level={2} />
      <VaultHeartbeatSignal active={true} />
      <XPTracker xp={380} />
      <SummonMultiplierPicker value={multiplier} setValue={setMultiplier} />
      <NodeHeatmapLite nodes={fakeNodes} />
      <StreakMeter streak={4} />
      <SessionNodeIndicator status="active" />
      <NodePingStatus nodeUrl="https://noxo-backend.fly.dev/api/ping" />
=======
import React from 'react';
import JobSubmitter from './components/JobSubmitter';
import JobFeed from './components/JobFeed';
import VaultStatsPanel from './components/VaultStatsPanel';
import RitualTrigger from './components/RitualTrigger'; // ✅ imported
import VaultCastTrigger from './components/VaultCastTrigger'; // add this too if not already

function App() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-black text-white p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center text-cyan-400">🌀 NOXO Network MVP</h1>
      <VaultStatsPanel />
      <VaultCastTrigger />        {/* 🔥 Already exists? Good! */}
      <RitualTrigger />           {/* ✅ THIS is what "render it" means */}
      <JobSubmitter />
      <JobFeed />
=======
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
>>>>>>> e7779e491c30cadc9ea5092e7302c9177f43fff1
>>>>>>> a2dd3a3830ff49ec5d1e9aa51c2c2cff38b4217e
    </div>
  );
}

export default App;
>>>>>>> 865297188b33778ee0043fc41823c9663ae65614
