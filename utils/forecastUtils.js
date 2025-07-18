export const generateForecast = (vaultStatus, nodeAvailability) => {
  return [1, 2, 5, 10, 100].map(multiplier => {
    const eta = Math.floor(Math.random() * 20 + 5); // mock ETA
    const status = vaultStatus[multiplier] ? "Available" : "Cooling";
    return { multiplier, eta, status };
  });
};