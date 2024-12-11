import axios from 'axios';
import { CONFIG } from '../constants/config';
import type { Idea } from '../types';
import type { CategoryId } from '../constants/categories';
import { sanitizeText } from '../utils/sanitize';

export class IdeasService {
  private static instance: IdeasService;
  private cache: Record<CategoryId, Idea[]> = {
    romance: [],
    raunch: [],
    renew: []
  };

  private constructor() {}

  static getInstance(): IdeasService {
    if (!IdeasService.instance) {
      IdeasService.instance = new IdeasService();
    }
    return IdeasService.instance;
  }

  async fetchIdeas(category: CategoryId): Promise<Idea[]> {
    if (this.cache[category].length > 0) {
      return this.cache[category];
    }

    try {
      const sheetId = CONFIG.SHEET_IDS[category];
      const response = await axios.get(
        `${CONFIG.API_BASE_URL}/${sheetId}/values/A2:B`,
        {
          params: { key: CONFIG.API_KEY }
        }
      );

      this.cache[category] = response.data.values.map((row: string[], index: number) => ({
        id: `${category}-${index}`,
        text: sanitizeText(row[1]),
        category
      }));

      return this.cache[category];
    } catch (error) {
      console.error(`Error fetching ideas for category ${category}:`, error);
      return [];
    }
  }

  getRandomIdea(categories: CategoryId[], excludeIds: string[]): Idea | null {
    const availableIdeas = categories.flatMap(category => 
      this.cache[category].filter(idea => !excludeIds.includes(idea.id))
    );

    if (availableIdeas.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * availableIdeas.length);
    return availableIdeas[randomIndex];
  }
}