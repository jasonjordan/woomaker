import { createStore } from 'vuex';
import type { Settings } from '../types';
import { NotificationService } from '../services/NotificationService';
import { CONFIG } from '../constants/config';
import { sanitizeCategories, sanitizeNumber } from '../utils/sanitize';

const notificationService = NotificationService.getInstance();

interface State {
  settings: Settings;
}

export default createStore<State>({
  state: {
    settings: {
      notificationsPerDay: CONFIG.DEFAULT_NOTIFICATIONS_PER_DAY,
      selectedDatabases: ['romance'],
      lastShownIdeas: []
    }
  },
  mutations: {
    updateSettings(state, settings: Partial<Settings>) {
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
    addShownIdea(state, ideaId: string) {
      if (typeof ideaId === 'string') {
        state.settings.lastShownIdeas.push(ideaId);
      }
    }
  },
  actions: {
    async updateNotificationSettings({ state, commit }, settings: Partial<Settings>) {
      commit('updateSettings', settings);
      await notificationService.scheduleNotifications(state.settings);
    }
  }
});