import type { Settings } from '../types';
import { CONFIG } from '../constants/config';

export interface State {
  settings: Settings;
}

export const state: State = {
  settings: {
    notificationsPerDay: CONFIG.DEFAULT_NOTIFICATIONS_PER_DAY,
    selectedDatabases: ['romance'],
    lastShownIdeas: []
  }
};