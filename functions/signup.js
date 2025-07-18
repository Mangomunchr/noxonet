import bcrypt from 'bcryptjs';

export async function onRequestPost({ request, env }) {
  try {
    const { email, password, terms } = await request.json();

    // Validation
    if (
      !terms ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof password !== 'string' ||
      password.length < 8
    ) {
      throw new Error('Validation failed: valid email, password ≥8 chars, and Terms accepted.');
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(password, salt);

    // Forward to vault-service API
    await fetch(`${env.VAULT_API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: hashed })
    });

    return new Response(
      `<h1>Thank you, ${email}!</h1>
       <p>Your account is created. We’ll activate payouts soon.</p>
       <a href="/">Back to Home</a>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  } catch (err) {
    return new Response(
      `<h1>Signup Error</h1>
       <p style="color:red;">${err.message}</p>
       <a href="/signup.html">Back to Sign Up</a>`,
      { status: 400, headers: { 'Content-Type': 'text/html' } }
    );
  }
}
