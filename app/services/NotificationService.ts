import { LocalNotifications } from '@nativescript/local-notifications';
import type { Settings } from '../types';
import { IdeasService } from './IdeasService';
import { sanitizeNumber, sanitizeDate } from '../utils/sanitize';

export class NotificationService {
  private static instance: NotificationService;
  private ideasService: IdeasService;

  private constructor() {
    this.ideasService = IdeasService.getInstance();
  }

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async scheduleNotifications(settings: Settings): Promise<void> {
    try {
      await LocalNotifications.cancelAll();

      const sanitizedCount = sanitizeNumber(settings.notificationsPerDay);
      const notifications = this.generateNotificationTimes(sanitizedCount)
        .map((time, index) => ({
          id: index + 1,
          title: 'Time to Woo! 💝',
          body: 'Tap to see your romantic idea',
          at: sanitizeDate(time),
          badge: 1,
          groupedMessages: ['New romantic idea available!'],
          groupSummary: 'Woo Notification'
        }));

      await LocalNotifications.schedule(notifications);
    } catch (error) {
      console.error('Error scheduling notifications:', error);
    }
  }

  private generateNotificationTimes(count: number): Date[] {
    const hoursInDay = 24;
    const interval = Math.floor(hoursInDay / count);
    const times: Date[] = [];

    for (let i = 0; i < count; i++) {
      const hour = (i * interval) + Math.floor(Math.random() * (interval - 1));
      const minute = Math.floor(Math.random() * 59);
      const time = new Date();
      time.setHours(hour, minute, 0, 0);
      times.push(time);
    }

    return times;
  }
}