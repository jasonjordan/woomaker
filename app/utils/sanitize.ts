import xss from 'xss';
import validator from 'validator';
import type { CategoryId } from '../constants/categories';
import { CATEGORIES } from '../constants/categories';
import { CONFIG } from '../constants/config';

export function sanitizeNumber(value: any): number {
  const num = Number(value);
  if (isNaN(num)) return CONFIG.DEFAULT_NOTIFICATIONS_PER_DAY;
  return Math.min(Math.max(num, CONFIG.MIN_NOTIFICATIONS_PER_DAY), CONFIG.MAX_NOTIFICATIONS_PER_DAY);
}

export function sanitizeText(value: string): string {
  if (typeof value !== 'string') return '';
  return xss(validator.trim(value));
}

export function sanitizeCategories(categories: string[]): CategoryId[] {
  if (!Array.isArray(categories)) return [CATEGORIES[0].id];
  
  const validCategories = categories.filter((cat): cat is CategoryId => 
    CATEGORIES.some(validCat => validCat.id === cat)
  );
  
  return validCategories.length > 0 ? validCategories : [CATEGORIES[0].id];
}

export function sanitizeDate(date: Date): Date {
  const sanitizedDate = new Date(date);
  return isNaN(sanitizedDate.getTime()) ? new Date() : sanitizedDate;
}