export async function onRequestPost({ request, env }) {
  const { jobName, description, intensity } = await request.json();
  // TODO: validate inputs

  // TODO: call your vault-service or job-queue API
  console.log('Received job:', { jobName, intensity });

  return new Response(
    `Job "${jobName}" submitted successfully!`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
