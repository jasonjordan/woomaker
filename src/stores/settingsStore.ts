import { create } from 'zustand';
import { CategoryId } from '../types/categories';
import { CONFIG } from '../config';
import { NotificationService } from '../services/NotificationService';

interface SettingsState {
  notificationsPerDay: number;
  selectedCategories: CategoryId[];
  lastShownIdeas: string[];
  setNotificationsPerDay: (count: number) => void;
  toggleCategory: (categoryId: CategoryId) => void;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  notificationsPerDay: CONFIG.DEFAULT_NOTIFICATIONS_PER_DAY,
  selectedCategories: ['romance'],
  lastShownIdeas: [],

  setNotificationsPerDay: async (count: number) => {
    set({ notificationsPerDay: count });
    await NotificationService.getInstance().scheduleNotifications({
      notificationsPerDay: count,
      selectedDatabases: get().selectedCategories,
      lastShownIdeas: get().lastShownIdeas,
    });
  },

  toggleCategory: async (categoryId: CategoryId) => {
    const currentCategories = get().selectedCategories;
    const newCategories = currentCategories.includes(categoryId)
      ? currentCategories.filter(id => id !== categoryId)
      : [...currentCategories, categoryId];
    
    set({ selectedCategories: newCategories });
    await NotificationService.getInstance().scheduleNotifications({
      notificationsPerDay: get().notificationsPerDay,
      selectedDatabases: newCategories,
      lastShownIdeas: get().lastShownIdeas,
    });
  },
}));