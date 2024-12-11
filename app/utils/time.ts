export function generateRandomTime(hour: number, interval: number): Date {
  const randomHour = hour + Math.floor(Math.random() * (interval - 1));
  const randomMinute = Math.floor(Math.random() * 59);
  const time = new Date();
  time.setHours(randomHour, randomMinute, 0, 0);
  return time;
}

export function distributeTimesOverDay(count: number): Date[] {
  const hoursInDay = 24;
  const interval = Math.floor(hoursInDay / count);
  return Array.from({ length: count }, (_, i) => generateRandomTime(i * interval, interval));
}