import React from 'react';
import './CoolBeansHUD.css';
import { useUser } from '../contexts/UserContext';

function CoolBeansHUD() {
  const { stats } = useUser();

  if (!stats) return null;

  return (
    <div className="hud-overlay">
      <div className="hud-item">💰 CoolBeans: {stats.coolBeans}</div>
      <div className="hud-item"⚔️ XP: {stats.xp}</div>
      <div className="hud-item">🏦 Vault: {stats.vault}</div>
    </div>
  );
}

export default CoolBeansHUD;
