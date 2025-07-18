import create from 'zustand';

interface WalletState {
  beans: number;
  spendBeans: (amount: number) => boolean;
  addBeans: (amount: number) => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  beans: 30,
  spendBeans: (amount) => {
    const current = get().beans;
    if (current >= amount) {
      set({ beans: current - amount });
      return true;
    }
    return false;
  },
  addBeans: (amount) => set((state) => ({ beans: state.beans + amount })),
}));