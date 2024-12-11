import Config from 'react-native-config';

export const ENV = {
  GOOGLE_SHEETS_API_KEY: Config.GOOGLE_SHEETS_API_KEY || '',
  SHEET_IDS: {
    romance: Config.ROMANCE_SHEET_ID || '',
    raunch: Config.RAUNCH_SHEET_ID || '',
    renew: Config.RENEW_SHEET_ID || ''
  }
} as const;