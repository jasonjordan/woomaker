import type { State } from './state';
import type { Settings } from '../types';
import { toggleItem } from '../utils/array';
import { sanitizeNumber, sanitizeCategories } from '../utils/sanitize';

export const mutations = {
  updateSettings(state: State, settings: Partial<Settings>) {
    if (settings.notificationsPerDay !== undefined) {
      state.settings.notificationsPerDay = sanitizeNumber(settings.notificationsPerDay);
    }
    if (settings.selectedDatabases !== undefined) {
      state.settings.selectedDatabases = sanitizeCategories(settings.selectedDatabases);
    }
    if (settings.lastShownIdeas !== undefined) {
      state.settings.lastShownIdeas = settings.lastShownIdeas.filter(id => typeof id === 'string');
    }
  },

  toggleCategory(state: State, categoryId: string) {
    state.settings.selectedDatabases = toggleItem(
      state.settings.selectedDatabases,
      categoryId
    );
  }
};