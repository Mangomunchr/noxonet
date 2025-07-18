import { roles } from "./RoleSelector";
export default function DevRoleSwitcher({ setRole }) {
  return (
    <div className="fixed top-0 right-0 p-2 bg-base-300 rounded-bl">
      {roles.map((r) => (
        <button
          key={r}
          className="btn btn-xs m-1"
          onClick={() => setRole(r)}
        >
          {r}
        </button>
      ))}
    </div>
  );
}