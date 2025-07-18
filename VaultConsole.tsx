export default function VaultConsole() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Vault Console</h1>
      <div className="mt-2 space-y-2">
        <div>Total Vault: $13,370</div>
        <div>Burn Rate: 🔥 86%</div>
        <div>Weather: 🌩️ Chaos Drift</div>
        <button className="btn btn-warning mt-4">🪙 Claim Mango Stone</button>
        <button className="btn btn-outline mt-2">👁️ View Ritual Stream</button>
      </div>
    </div>
  );
}