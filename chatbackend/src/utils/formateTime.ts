/**
 * 格式化给定的 Date 对象为 'YYYY-MM-DD HH:mm:ss' 格式的字符串
 * @param date - 传入的 Date 对象
 * @returns 返回格式化的日期时间字符串
 */
export function formatTime(date: Date): string {
  if (isNaN(date.getTime())) {
    throw new Error('传入的参数必须是一个有效的 Date 对象');
  }

  const padStart = (num: number): string => String(num).padStart(2, '0');

  const year = date.getFullYear();
  const month = padStart(date.getMonth() + 1); // getMonth() 返回 0-11，所以需要加 1
  const day = padStart(date.getDate());
  const hours = padStart(date.getHours());
  const minutes = padStart(date.getMinutes());
  const seconds = padStart(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
