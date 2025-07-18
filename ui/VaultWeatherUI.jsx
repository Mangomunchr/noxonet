export default function VaultWeatherUI({ weather }) {
  const themes = {
    monsoon: { label: '☔ Mango Monsoon', color: 'bg-blue-900', bonus: '+17% Vault XP' },
    eclipse: { label: '🌒 Chompy Eclipse', color: 'bg-gray-800', bonus: 'Burns reduced by 25%' },
    blessing: { label: '🌬️ Blessing Wind', color: 'bg-green-800', bonus: 'Jobs grant +10 XP' },
  };
  const w = themes[weather] || themes['blessing'];
  return (
    <div className={`${w.color} text-white p-3 rounded-lg`}>
      <h2 className="text-xl">{w.label}</h2>
      <p className="text-sm">{w.bonus}</p>
    </div>
  );
}