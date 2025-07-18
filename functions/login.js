import bcrypt from 'bcryptjs';

export async function onRequestPost({ request, env }) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      throw new Error('Email and password required.');
    }

    // Fetch user record from your vault-service API
    const resp = await fetch(`${env.VAULT_API_URL}/users/${encodeURIComponent(email)}`);
    if (!resp.ok) {
      throw new Error('User not found.');
    }
    const user = await resp.json();

    // Compare hashed password
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      throw new Error('Invalid credentials.');
    }

    // On success, redirect to dashboard with email in query
    const redirectUrl = `/dashboard.html?email=${encodeURIComponent(email)}`;
    return Response.redirect(redirectUrl, 302);

  } catch (err) {
    // Return 401 with the error message for display in the login form
    return new Response(err.message, { status: 401 });
  }
}
