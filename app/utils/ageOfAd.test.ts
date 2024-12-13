import { describe, it, expect } from 'vitest';
import getAgeOfAd from './ageOfAd';

describe('getAgeOfAd', () => {
  it('less than 24 hours ago', () => {
    const now = new Date();

    const oneHourAgo = new Date(
      now.getTime() - 1 * 60 * 60 * 1000
    ).toISOString();

    const result = getAgeOfAd(oneHourAgo);
    expect(result).toBe('1 годин тому');
  });

  it('less than 7 days ago', () => {
    const now = new Date();

    const threeDaysAgo = new Date(
      now.getTime() - 3 * 24 * 60 * 60 * 1000
    ).toISOString();

    const result = getAgeOfAd(threeDaysAgo);
    expect(result).toBe('3 днів тому');
  });

  it('more than 7 days ago', () => {
    const now = new Date();

    const tenDaysAgo = new Date(
      now.getTime() - 10 * 24 * 60 * 60 * 1000
    ).toISOString();

    const result = getAgeOfAd(tenDaysAgo);
    expect(result).toBe('1 тижнів тому');
  });

  it('should handle edge cases with exact boundaries', () => {
    const now = new Date();

    const exactlyOneDayAgo = new Date(
      now.getTime() - 24 * 60 * 60 * 1000
    ).toISOString();

    const result = getAgeOfAd(exactlyOneDayAgo);
    expect(result).toBe('1 днів тому');

    const exactlySevenDaysAgo = new Date(
      now.getTime() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();

    const result2 = getAgeOfAd(exactlySevenDaysAgo);
    expect(result2).toBe('1 тижнів тому');
  });
});
