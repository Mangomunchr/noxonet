export default function NodeMonkDashboard() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Your GPU is a Temple</h1>
      <div className="grid gap-2">
        <div>🧪 Active Job: AI Gen #7751</div>
        <div>💰 Vault Reward: +$2.12</div>
        <div>📈 Uptime: 97%</div>
        <div>🧬 NodeSoul: Stable</div>
        <div>☁️ Vault Weather: Mango Monsoon (+1.2x)</div>
      </div>
      <div className="mt-4 space-y-2">
        <button className="btn btn-success">✅ Accept Job</button>
        <button className="btn">🧘 Monk Mode</button>
        <button className="btn btn-warning">🚨 Claim Mythic Challenge</button>
        <select className="select w-full">
          <option>Chaos Hot 🔥</option>
          <option>Silent Monk 🧘</option>
          <option>Safe</option>
          <option>Auto</option>
        </select>
      </div>
    </div>
  );
}