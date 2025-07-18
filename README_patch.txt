To wire this in:

1. Copy VaultBar.jsx into frontend/src/components/
2. Update App.jsx to import and render it above JobFeed:

import VaultBar from './components/VaultBar';

function App() {
  return (
    <div>
      <VaultBar />
      <JobSubmitter />
      <JobFeed />
    </div>
  );
}
