// functions/nodes.js

export async function onRequestGet({ env }) {
  // Sample data—replace with your real vault-service call later
  const nodes = [
    { id: 1, lat: 37.7749, lng: -122.4194 }, // San Francisco
    { id: 2, lat: 51.5074, lng: -0.1278 },   // London
    { id: 3, lat: 35.6895, lng: 139.6917 },  // Tokyo
    { id: 4, lat: -33.8688, lng: 151.2093 }  // Sydney
  ];
  return new Response(JSON.stringify(nodes), {
    headers: { 'Content-Type': 'application/json' }
  });
}
