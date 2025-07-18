export const getCurrentRole = (xp, roles) => {
  return roles.reduce((current, role) => {
    return xp >= role.threshold ? role : current;
  }, roles[0]);
};