import create from 'zustand';

interface NoxoState {
  role: string;
  xp: number;
  vault: number;
  setRole: (role: string) => void;
  addXP: (amount: number) => void;
  updateVault: (amount: number) => void;
}

export const useNoxoState = create<NoxoState>((set) => ({
  role: 'Renderling',
  xp: 0,
  vault: 0,
  setRole: (role) => set({ role }),
  addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
  updateVault: (amount) => set((state) => ({ vault: state.vault + amount })),
}));