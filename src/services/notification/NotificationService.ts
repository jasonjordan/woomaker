import { LocalNotifications } from '@nativescript/local-notifications';
import type { Settings } from '../../types';
import { generateNotificationTimes } from '../../utils/time';
import { createNotificationConfig } from '../../utils/notification';
import { sanitizeNumber } from '../../utils/sanitize';

export class NotificationService {
  private static instance: NotificationService;

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async scheduleNotifications(settings: Settings): Promise<void> {
    try {
      await LocalNotifications.cancelAll();

      const count = sanitizeNumber(settings.notificationsPerDay);
      const times = generateNotificationTimes(count);
      
      const notifications = times.map((time, index) => 
        createNotificationConfig(index, time)
      );

      await LocalNotifications.schedule(notifications);
    } catch (error) {
      console.error('Error scheduling notifications:', error);
    }
  }
}