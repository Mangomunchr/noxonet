import React from 'react';

export default function StripeButton() {
  const handlePayment = () => {
    window.open('https://buy.stripe.com/test_payment_link', '_blank');
  };

  return (
    <button onClick={handlePayment} className="bg-green-500 px-6 py-2 rounded text-white hover:bg-green-400">
      💳 Buy Vault Credits
    </button>
  );
}