// src/engine/NoxoContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { engine, Engine } from './NoxoEngine';

const NoxoContext = createContext<Engine>(engine);
export const useNoxo = () => useContext(NoxoContext);

export const NoxoProvider = ({ children }: { children: ReactNode }) => (
  <NoxoContext.Provider value={engine}>{children}</NoxoContext.Provider>
);
