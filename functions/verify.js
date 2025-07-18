export async function onRequestPost({ request, env }) {
  const { token } = await request.json();
  if (!token) {
    return new Response('Token missing.', { status: 400 });
  }

  // Call your vault-service to verify the token
  const resp = await fetch(`${env.VAULT_API_URL}/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });

  if (!resp.ok) {
    const msg = await resp.text();
    return new Response(msg, { status: 400 });
  }

  return new Response(null, { status: 200 });
}
