export interface NotificationConfig {
  id: number;
  title: string;
  body: string;
  at: Date;
  badge: number;
  groupedMessages: string[];
  groupSummary: string;
}