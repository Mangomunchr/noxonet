// src/jobEngine.ts

/**
 * Simulate running a render job.
 * @param jobId      Unique ID for this job
 * @param difficulty A difficulty multiplier (affects payout)
 * @param timeSec    Seconds until it completes
 * @param cb         Callback with { jobId, payout }
 */
export function runJob(
  jobId: string,
  difficulty: number,
  timeSec: number,
  cb: (result: { jobId: string; payout: number }) => void
) {
  setTimeout(() => {
    const payout = difficulty * 10; // 10 XP per difficulty
    cb({ jobId, payout });
  }, timeSec * 1000);
}
