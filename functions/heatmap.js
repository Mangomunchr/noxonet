// functions/heatmap.js

export async function onRequestGet({ env }) {
  // Sample heat data: [latitude, longitude, intensity]
  const points = [
    [37.7749, -122.4194, 0.5],  // San Francisco (50% load)
    [51.5074, -0.1278,    0.8],  // London (80% load)
    [35.6895, 139.6917,   0.3],  // Tokyo (30% load)
    [-33.8688, 151.2093,  0.6]   // Sydney (60% load)
  ];
  return new Response(JSON.stringify(points), {
    headers: { 'Content-Type': 'application/json' }
  });
}
