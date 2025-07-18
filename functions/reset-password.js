import bcrypt from 'bcryptjs';

export async function onRequestPost({ request, env }) {
  const { token, password } = await request.json();
  if (!token || typeof password !== 'string' || password.length < 8) {
    return new Response('Invalid token or password.', { status: 400 });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);

  const resp = await fetch(`${env.VAULT_API_URL}/password-reset`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ token, password: hashed })
  });
  if (!resp.ok) {
    const msg = await resp.text();
    return new Response(msg, { status: 400 });
  }

  return new Response('Password has been reset! You can now log in.', { status: 200 });
}
