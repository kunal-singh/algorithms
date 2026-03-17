import { describe, it, expect } from 'vitest';
import maxProfit from '../best-time-to-buy-stock.js';

describe('Best Time to Buy and Sell Stock', () => {
  it('returns max profit for typical input', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  });
  it('returns 0 when prices only decrease (no profitable trade)', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
  it('returns 0 for single-element array', () => {
    expect(maxProfit([1])).toEqual(0);
  });
  it('returns 0 when all prices are the same', () => {
    expect(maxProfit([5, 5, 5])).toEqual(0);
  });
  it('returns full range profit for monotonically increasing prices', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
  });
  it('returns correct profit when best buy is not at index 0', () => {
    expect(maxProfit([3, 1, 4, 8, 2])).toEqual(7);
  });
});
