export default function XPLevelPath({ xp = 33 }) {
  const maxXP = 100;
  const progress = Math.min((xp / maxXP) * 100, 100);
  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold">🌱 Path to Rendar</h2>
      <div className="w-full bg-base-300 h-4 rounded-full overflow-hidden mt-1">
        <div className="bg-primary h-4" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-xs mt-1 text-center">{xp} / {maxXP} XP</p>
      {xp >= 100 && <button className="btn btn-success mt-2 w-full">🔓 Evolve to Rendar</button>}
    </div>
  );
}