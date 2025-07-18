// src/usePlayerStore.ts
import { create } from 'zustand';
export const usePlayerStore = create((set, get) => ({
    xp: 0,
    beans: 0,
    vault: 0,
    role: 'Renderling',
    gainXP: (amt) => set((s) => ({ xp: s.xp + amt })),
    gainBeans: (amt) => set((s) => ({ beans: s.beans + amt })),
    addVault: (amt) => set((s) => ({ vault: s.vault + amt })),
    promote: () => set((s) => s.role === 'Renderling' && s.xp >= 100 ? { role: 'Rendar' } : {}),
    ascendNodeMonk: () => set((s) => s.role === 'Rendar' && s.xp >= 1000 ? { role: 'NodeMonk' } : {}),
    ascendMythic: () => set((s) => s.role === 'NodeMonk' && s.xp >= 5000 ? { role: 'MythicNode' } : {}),
}));
