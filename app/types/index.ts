export * from './notifications';
import type { CategoryId } from '../constants/categories';

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Idea {
  id: string;
  text: string;
  category: CategoryId;
}

export interface Settings {
  notificationsPerDay: number;
  selectedDatabases: CategoryId[];
  lastShownIdeas: string[];
}