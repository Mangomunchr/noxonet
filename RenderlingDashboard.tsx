export default function RenderlingDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome to Noxo</h1>
      <p>You’ve got no GPU… but you’ve got a path.</p>
      <div className="mt-4 space-y-2">
        <button className="btn">Watch Live Jobs</button>
        <button className="btn">Learn How to Summon</button>
        <button className="btn">Claim Starter CoolBeans</button>
        <button className="btn">Evolve to Rendar / NodeMonk</button>
      </div>
    </div>
  );
}