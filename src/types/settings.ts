import type { CategoryId } from '../constants/categories';

export interface Settings {
  notificationsPerDay: number;
  selectedDatabases: CategoryId[];
  lastShownIdeas: string[];
}