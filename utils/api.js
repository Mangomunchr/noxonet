
export async function fetchVaultStats(userId) {
  try {
    const res = await fetch(\`/api/stats?userId=\${userId}\`);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch vault stats:', err);
    return null;
  }
}

export async function castVaultSignal(userId) {
  try {
    const res = await fetch('/api/vault/cast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });
    const data = await res.json();
    return data.message || 'Signal sent';
  } catch (err) {
    console.error('Vault cast failed:', err);
    return 'Failed';
  }
}
