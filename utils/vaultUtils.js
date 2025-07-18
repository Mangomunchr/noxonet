export const interpretVaultLoad = (load) => {
  if (load < 30) return 'Low';
  if (load < 70) return 'Stable';
  return 'High';
};