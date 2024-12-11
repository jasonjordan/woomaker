import type { ActionContext } from 'vuex';
import type { State } from './state';
import type { Settings } from '../types';
import { NotificationService } from '../services/NotificationService';

const notificationService = NotificationService.getInstance();

export const actions = {
  async updateNotificationSettings(
    { state, commit }: ActionContext<State, State>,
    settings: Partial<Settings>
  ) {
    commit('updateSettings', settings);
    await notificationService.scheduleNotifications(state.settings);
  },

  async toggleCategory(
    { state, commit, dispatch }: ActionContext<State, State>,
    categoryId: string
  ) {
    commit('toggleCategory', categoryId);
    await dispatch('updateNotificationSettings', {});
  }
};