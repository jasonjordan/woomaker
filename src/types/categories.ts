export type CategoryId = 'romance' | 'raunch' | 'renew';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
}