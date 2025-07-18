import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Vault from './pages/Vault'
import VaultMapViewer from './pages/VaultMapViewer'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vault" element={<Vault />} />
      <Route path="/vault-map" element={<VaultMapViewer />} />
    </Routes>
  )
}
