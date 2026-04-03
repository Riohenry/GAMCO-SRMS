import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Prevents class conflicts when combining dynamic and static classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format currency values
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Truncate text to a specific length
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('loggedIn') === 'true';
}

/**
 * Get user role from localStorage
 */
export function getUserRole(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('userRole');
}

/**
 * Set authentication state
 */
export function setAuthenticated(isAuth: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('loggedIn', String(isAuth));
}
