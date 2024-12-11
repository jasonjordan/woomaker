export function removeItem<T>(array: T[], item: T): T[] {
  const index = array.indexOf(item);
  if (index === -1) return array;
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function addItem<T>(array: T[], item: T): T[] {
  return [...array, item];
}

export function toggleItem<T>(array: T[], item: T): T[] {
  return array.includes(item) ? removeItem(array, item) : addItem(array, item);
}