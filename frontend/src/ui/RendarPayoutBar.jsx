export default function RendarPayoutBar({ base, multiplier }) {
  const reward = base * multiplier;
  return (
    <div className="bg-green-900 p-3 rounded-xl text-white text-center">
      <p>🔥 Estimated Payout: <b>${reward.toFixed(2)}</b></p>
      <small>(Base: ${base.toFixed(2)} | Multiplier: {multiplier}x)</small>
    </div>
  );
}