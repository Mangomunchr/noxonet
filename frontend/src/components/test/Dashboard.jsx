
import React from 'react';
import TestAlerts from './TestAlerts';
import TestApi from './TestApi';
import TestBurnlog from './TestBurnlog';
import TestChaos from './TestChaos';
import TestChaosbeacon from './TestChaosbeacon';
import TestChaosbuttonhistory from './TestChaosbuttonhistory';
import TestChaoscodex from './TestChaoscodex';
import TestChaosdrift from './TestChaosdrift';
import TestChaoslog from './TestChaoslog';
import TestChaosmutations from './TestChaosmutations';

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Noxonet API Tester</h1>
      <TestAlerts />
        <TestApi />
        <TestBurnlog />
        <TestChaos />
        <TestChaosbeacon />
        <TestChaosbuttonhistory />
        <TestChaoscodex />
        <TestChaosdrift />
        <TestChaoslog />
        <TestChaosmutations />
    </div>
  );
}
