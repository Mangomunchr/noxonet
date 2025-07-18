export default function SummonModeEngine({ maxMultiplier = 5 }) {
  const multipliers = [1, 2, 5, 10, 100];
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">⚡ Select Speed (Summon Mode)</h2>
      <div className="grid grid-cols-5 gap-2 mt-2">
        {multipliers.map((m) => (
          <button
            key={m}
            disabled={m > maxMultiplier}
            className={
              "btn " +
              (m > maxMultiplier ? "opacity-30 cursor-not-allowed" : "btn-primary")
            }
          >
            {m}x
          </button>
        ))}
      </div>
      <p className="text-sm text-warning mt-2">Only up to {maxMultiplier}x is available right now.</p>
    </div>
  );
}