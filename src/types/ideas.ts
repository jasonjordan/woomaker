import type { CategoryId } from '../constants/categories';

export interface Idea {
  id: string;
  text: string;
  category: CategoryId;
}