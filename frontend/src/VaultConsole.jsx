import React from 'react';
import VaultStatsPanel from './components/VaultStatsPanel';
import VaultCastTrigger from './components/VaultCastTrigger';
import SummonJobUI from './components/SummonJobUI';
import VaultPayoutPanel from './components/VaultPayoutPanel';
import JobFeedPanel from './components/JobFeedPanel';
import LeaderboardPanel from './components/LeaderboardPanel';
import VaultWeatherBanner from './components/VaultWeatherBanner';
import ChaosRitualPopup from './components/ChaosRitualPopup';
import MangoWarProgressPanel from './components/MangoWarProgressPanel';
import BurnSimulator from './components/BurnSimulator';
import VaultLogsPanel from './components/VaultLogsPanel';
import CooldownOverlay from './components/CooldownOverlay';
import UserInfoCard from './components/UserInfoCard';
import ChaosPulseBanner from './components/ChaosPulseBanner';
import MiniRendarRadar from './components/MiniRendarRadar';
import AutoPingStatus from './components/AutoPingStatus';
import StreakFlareMeter from './components/StreakFlareMeter';

export default function VaultConsole({ userId }) {
  return (
    <div className="min-h-screen bg-black text-white p-4 space-y-4">
      <AutoPingStatus />
      <VaultWeatherBanner />
      <ChaosPulseBanner active={true} />
      <UserInfoCard userId={userId} chaos={true} mango={42} />
      <VaultStatsPanel userId={userId} />
      <CooldownOverlay until={new Date(Date.now() + 12000)} />
      <StreakFlareMeter streak={27} />
      <VaultCastTrigger userId={userId} />
      <SummonJobUI userId={userId} />
      <VaultPayoutPanel userId={userId} />
      <JobFeedPanel userId={userId} />
      <VaultLogsPanel userId={userId} />
      <LeaderboardPanel />
      <MangoWarProgressPanel />
      <ChaosRitualPopup userId={userId} />
      <MiniRendarRadar count={7} />
      <BurnSimulator />
    </div>
  );
}