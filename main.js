
const api = import.meta.env.VITE_API_URL;

async function getVault() {
  const res = await fetch(`${api}/api/vault`);
  const json = await res.json();
  document.getElementById('app').innerText = JSON.stringify(json, null, 2);
}

getVault();
