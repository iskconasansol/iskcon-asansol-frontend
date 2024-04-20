import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDaysInMonth(month: number) {
  // Ensure the input is a valid month (between 1 and 12)
  if (month < 1 || month > 12) {
    console.error('Invalid month. Please provide a month between 1 and 12.');
    return null;
  }

  // Create a new Date object for the specified month and set the date to the first day
  const currentDate = new Date();
  currentDate.setMonth(month - 1, 1);

  // Subtract one day to get the last day of the specified month
  currentDate.setDate(currentDate.getDate() - 1);

  // Retrieve the day of the month, which gives the number of days in the specified month
  const daysInMonth = currentDate.getDate();

  return daysInMonth;
}

export const padDigit = (digit: number, padding: number) => {
  return Number(digit.toString().padStart(padding, '0'));
};

export const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
