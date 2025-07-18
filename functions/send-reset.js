import { randomUUID } from 'crypto';
import sgMail from '@sendgrid/mail';

export async function onRequestPost({ request, env }) {
  sgMail.setApiKey(env.SENDGRID_API_KEY);
  const { email } = await request.json();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response('Invalid email.', { status: 400 });
  }

  const token = randomUUID();
  await fetch(`${env.VAULT_API_URL}/password-reset`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ email, token })
  });

  const link = `${env.BASE_URL}/reset-password.html?token=${token}`;
  await sgMail.send({
    to: email,
    from: 'noreply@nodetemple.pages.dev',
    subject: 'Reset your NodeTemple password',
    html: `<p><a href="${link}">Reset your password</a></p>`
  });

  return new Response('Reset link sent—check your inbox.', { status: 200 });
}
