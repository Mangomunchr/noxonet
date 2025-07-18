document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("stormStatus");
  const map = document.getElementById("stormMap");
  status.textContent = "Scanning for Mango Storms...";
  setTimeout(() => {
    status.textContent = "Vault Storm Detected in NodeTemple!";
    map.innerHTML = "<img src='storm-visual.png' alt='Storm Map' style='max-width:100%'>";
  }, 2000);
});