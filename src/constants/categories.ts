export const CATEGORIES = [
  { id: 'romance', name: 'Romance - Sweet & Tender' },
  { id: 'raunch', name: 'Raunch - Spicy & Bold' },
  { id: 'renew', name: 'Renew - Relationship Building' }
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];

export interface Category {
  id: CategoryId;
  name: string;
}