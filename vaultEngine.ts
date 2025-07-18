export function calculatePayout({ multiplier = 1, chaos = 1, base = 1.00 }) {
  const bonus = multiplier * chaos;
  const payout = (base * bonus).toFixed(2);
  return parseFloat(payout);
}