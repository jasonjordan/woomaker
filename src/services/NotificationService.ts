import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';
import type { Settings } from '../types';
import { generateNotificationTimes } from '../utils/time';
import { createNotificationConfig } from '../utils/notification';

export class NotificationService {
  private static instance: NotificationService;

  private constructor() {
    this.initializeNotifications();
  }

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  private initializeNotifications() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });

    PushNotification.createChannel(
      {
        channelId: 'default',
        channelName: 'Default Channel',
        channelDescription: 'Default notification channel',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`Channel created: ${created}`)
    );
  }

  async scheduleNotifications(settings: Settings): Promise<void> {
    try {
      PushNotification.cancelAllLocalNotifications();

      const times = generateNotificationTimes(settings.notificationsPerDay);
      
      times.forEach((time, index) => {
        const config = createNotificationConfig(index, time);
        PushNotification.localNotificationSchedule({
          channelId: 'default',
          title: config.title,
          message: config.body,
          date: config.at,
          allowWhileIdle: true,
          repeatType: 'day',
        });
      });
    } catch (error) {
      console.error('Error scheduling notifications:', error);
    }
  }
}