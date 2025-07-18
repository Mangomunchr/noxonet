export default function RendarDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Summon a Job</h1>
      <div className="space-y-4 mt-4">
        <input type="file" className="input" />
        <select className="select w-full">
          <option>1x</option>
          <option>2x</option>
          <option>5x</option>
          <option disabled>10x (Locked)</option>
          <option disabled>100x (Locked)</option>
        </select>
        <select className="select w-full">
          <option>CoolBeans</option>
          <option>USD</option>
          <option>Crypto</option>
        </select>
        <label className="label cursor-pointer">
          <span className="label-text">Add Ritual?</span>
          <input type="checkbox" className="toggle" />
        </label>
        <button className="btn btn-primary w-full">🔥 Summon Now</button>
      </div>
    </div>
  );
}