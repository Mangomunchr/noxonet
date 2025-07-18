
document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const jobName = document.getElementById("jobName").value;
    const gpuPower = document.getElementById("gpuPower").value;
    const speed = document.getElementById("speedMultiplier").value;

    const jobEntry = document.createElement("div");
    jobEntry.textContent = `Job: ${jobName} | GPU Power: ${gpuPower} | Speed: ${speed}x`;
    document.getElementById("activeJobs").appendChild(jobEntry);

    // Future: Hook into backend submission queue
});
