import { ENV } from '../config/env';

export const CONFIG = {
  MAX_NOTIFICATIONS_PER_DAY: 5,
  MIN_NOTIFICATIONS_PER_DAY: 1,
  DEFAULT_NOTIFICATIONS_PER_DAY: 1,
  API_BASE_URL: 'https://sheets.googleapis.com/v4/spreadsheets',
  SHEET_IDS: ENV.SHEET_IDS,
  API_KEY: ENV.GOOGLE_SHEETS_API_KEY
} as const;