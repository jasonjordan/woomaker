import axios from 'axios';
import { Idea } from '../types';

const SHEET_IDS = {
  romance: 'YOUR_ROMANCE_SHEET_ID',
  raunch: 'YOUR_RAUNCH_SHEET_ID',
  renew: 'YOUR_RENEW_SHEET_ID'
};

export async function fetchIdeas(category: string): Promise<Idea[]> {
  const sheetId = SHEET_IDS[category];
  const response = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A2:B`,
    {
      params: {
        key: 'YOUR_API_KEY'
      }
    }
  );

  return response.data.values.map((row, index) => ({
    id: `${category}-${index}`,
    text: row[1],
    category
  }));
}