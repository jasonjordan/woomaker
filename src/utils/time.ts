export function generateRandomTime(hour: number): Date {
  const randomMinute = Math.floor(Math.random() * 59);
  const time = new Date();
  time.setHours(hour, randomMinute, 0, 0);
  return time;
}

export function generateNotificationTimes(count: number): Date[] {
  const hoursInDay = 24;
  const interval = Math.floor(hoursInDay / count);
  const times: Date[] = [];

  for (let i = 0; i < count; i++) {
    const baseHour = i * interval;
    const randomHour = baseHour + Math.floor(Math.random() * interval);
    times.push(generateRandomTime(randomHour));
  }

  return times.sort((a, b) => a.getTime() - b.getTime());
}