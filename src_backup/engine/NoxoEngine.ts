// src/engine/NoxoEngine.ts
import xpSystem from '../specs/xp_system.json';
import glicko2Logic from '../specs/glicko2_logic.json';
import promotionRequirements from '../specs/promotion_requirements.json';
import ritualEngine from '../specs/ritual_engine.json';
import coolBeansEngine from '../specs/cool_beans_engine.json';

export const engine = {
  xpSystem,
  glicko2Logic,
  promotionRequirements,
  ritualEngine,
  coolBeansEngine
};

export type Engine = typeof engine;
