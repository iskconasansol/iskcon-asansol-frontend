import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDaysInCurrentMonth() {
  // Create a new Date object for the current date
  const currentDate = new Date();

  // Set the date to the first day of the next month
  currentDate.setMonth(currentDate.getMonth() + 1, 1);

  // Subtract one day to get the last day of the current month
  currentDate.setDate(currentDate.getDate() - 1);

  // Retrieve the day of the month, which gives the number of days in the current month
  const daysInMonth = currentDate.getDate();

  return daysInMonth;
}
