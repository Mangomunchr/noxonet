import React from 'react';

const VaultWeather = ({ condition }) => {
  const conditions = {
    "Mango Monsoon": "bg-yellow-300 text-black",
    "Chompy Eclipse": "bg-purple-700 text-white",
    "None": "bg-gray-800 text-white"
  };
  const style = conditions[condition] || conditions["None"];

  return (
    <div className={\`p-3 rounded-xl font-bold \${style}\`}>
      Vault Weather: {condition}
    </div>
  );
};

export default VaultWeather;