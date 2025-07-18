export default function Wallet({ balance = 30 }) {
  return (
    <div className="bg-base-200 p-4 rounded-lg mt-2">
      <h2 className="font-semibold">🎒 CoolBeans Wallet</h2>
      <p>You currently have <b>{balance} Beans</b>.</p>
      <button className="btn btn-outline btn-sm mt-2">Buy More</button>
    </div>
  );
}