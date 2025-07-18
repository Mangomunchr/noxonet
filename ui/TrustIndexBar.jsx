export default function TrustIndexBar({ trustScore }) {
  const color = trustScore > 80 ? 'bg-green-500' : trustScore > 50 ? 'bg-yellow-400' : 'bg-red-500';
  return (
    <div className="w-full bg-gray-700 rounded-lg p-2">
      <div className={`${color} h-3 rounded`} style={{ width: `${trustScore}%` }}></div>
      <p className="text-xs mt-1 text-white text-center">Trust Index: {trustScore}/100</p>
    </div>
  );
}