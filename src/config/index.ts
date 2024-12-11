export const CONFIG = {
  MAX_NOTIFICATIONS_PER_DAY: 5,
  MIN_NOTIFICATIONS_PER_DAY: 1,
  DEFAULT_NOTIFICATIONS_PER_DAY: 1,
  API_BASE_URL: 'https://sheets.googleapis.com/v4/spreadsheets',
  SHEET_IDS: {
    romance: process.env.ROMANCE_SHEET_ID || '',
    raunch: process.env.RAUNCH_SHEET_ID || '',
    renew: process.env.RENEW_SHEET_ID || ''
  },
  API_KEY: process.env.GOOGLE_SHEETS_API_KEY || ''
} as const;