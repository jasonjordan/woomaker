import type { NotificationConfig } from '../types/notifications';

export function createNotificationConfig(index: number, time: Date): NotificationConfig {
  return {
    id: index + 1,
    title: 'Time to Woo! 💝',
    body: 'Tap to see your romantic idea',
    at: time,
    badge: 1,
    groupedMessages: ['New romantic idea available!'],
    groupSummary: 'Woo Notification'
  };
}