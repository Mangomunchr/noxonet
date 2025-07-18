
import React from 'react';

export default function XPOnboardingTrail({ steps }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 w-full text-white max-w-xl">
      <div className="text-xs uppercase text-slate-400 mb-2">🧭 Onboarding Trail</div>
      <ol className="list-decimal list-inside space-y-1 text-sm">
        {steps.map((step, i) => (
          <li key={i} className={step.completed ? "text-green-400" : "text-slate-300"}>
            {step.label}
          </li>
        ))}
      </ol>
    </div>
  );
}
