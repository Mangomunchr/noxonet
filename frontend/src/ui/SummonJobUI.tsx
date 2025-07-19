import RendarPayoutBar from './RendarPayoutBar';

export default function SummonJobUI() {
  return (
    <div className="space-y-4 bg-black p-4 rounded-xl text-green-400">
      <label>Summon Speed:</label>
      <select className="text-black">
        {[1, 2, 5, 10, 100].map((m) => (
          <option key={m} value={m} disabled={m > 10}>{m}x</option>
        ))}
      </select>
      <button className="bg-green-700 p-2 rounded-lg hover:bg-green-600">Summon Job</button>
      <RendarPayoutBar base={100} multiplier={5} />
    </div>
  );
}