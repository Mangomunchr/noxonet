export default function CoolBeansShop() {
  return (
    <div className="p-6 bg-base-100 rounded-lg space-y-4">
      <h1 className="text-xl font-bold">🫘 Buy CoolBeans™</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="btn btn-outline">💵 10 Beans – $1</button>
        <button className="btn btn-outline">💸 50 Beans – $4</button>
        <button className="btn btn-outline">🚀 100 Beans – $7</button>
        <button className="btn btn-outline">🧙 1000 Beans – $49</button>
      </div>
      <div className="text-sm text-info">
        CoolBeans are used to pay for rendering jobs, rituals, and priority boosts.
      </div>
      <button className="btn btn-primary w-full mt-4">Proceed to Checkout</button>
    </div>
  );
}