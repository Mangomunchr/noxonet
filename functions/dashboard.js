export async function onRequestGet({ request, env }) {
  // In a real app you’d check a cookie or token; for MVP we'll pass ?email=
  const url = new URL(request.url);
  const email = url.searchParams.get('email');
  if (!email) {
    return new Response('Missing email query', { status: 400 });
  }

  // Fetch stats from your vault API
  const resp = await fetch(`${env.VAULT_API_URL}/stats?email=${encodeURIComponent(email)}`);
  if (!resp.ok) {
    return new Response('Failed to load dashboard data', { status: 502 });
  }
  const stats = await resp.json();

  return new Response(JSON.stringify(stats), {
    headers: { 'Content-Type': 'application/json' }
  });
}
