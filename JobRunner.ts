export async function runFakeJob(jobId: string, onComplete: (result: any) => void) {
  console.log("Running job:", jobId);
  setTimeout(() => {
    const result = {
      jobId,
      payout: 2.12,
      xp: 22,
      success: true
    };
    onComplete(result);
  }, 3000);
}