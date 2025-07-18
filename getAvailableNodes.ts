export function getAvailableNodes() {
  // Simulate dynamic node availability
  const total = 20;
  const busy = Math.floor(Math.random() * 10);
  const free = total - busy;
  const maxMultiplier = free >= 10 ? 100 : free >= 5 ? 10 : free >= 3 ? 5 : free >= 1 ? 2 : 1;
  return { free, maxMultiplier };
}