export const isChaosAvailable = (vaultStatus) => {
  return !vaultStatus.chaosLocked && vaultStatus.load > 70;
};