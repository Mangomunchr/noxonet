export default function RoleGate({ role, xp, children }) {
  if (role === "Renderling" && xp < 100) {
    return <div className="alert alert-warning">🔒 You must reach 100 XP to evolve and summon jobs.</div>;
  }
  return children;
}