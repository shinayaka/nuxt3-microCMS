import { DateTime } from "luxon";

/**
 * 日付フォーマット
 * @param date ISO8601形式の文字列
 * @returns フォーマット後の文字列
 * @example 2023-03-03T05:49:27.706Z → 2023/03/03
 */
export function formatDate(date: string): string {
  const dt = DateTime.fromISO(date);
  return dt.toFormat("yyyy/MM/dd");
}
