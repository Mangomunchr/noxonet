// src/networkEngine.ts
/** How many free nodes you’ve earned this cycle */
export function getFreeNodes() {
    return Math.floor(Math.random() * 5) + 1; // 1–5 free nodes
}
/** What’s the current bonus multiplier for hosted nodes */
export function getMaxMultiplier() {
    return 1 + Math.floor(Math.random() * 3); // 1×–3×
}
