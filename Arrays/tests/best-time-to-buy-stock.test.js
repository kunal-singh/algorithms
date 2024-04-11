import { describe, it, expect } from 'vitest';
import maxProfit from '../best-time-to-buy-stock.js';

describe('Two sum', () => {
  it('test case 1', () => {
    const arr1 = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(arr1)).toEqual(5);
  });
  it('test case 2', () => {
    const arr1 = [7, 6, 4, 3, 1];
    expect(maxProfit(arr1)).toEqual(0);
  });
});
