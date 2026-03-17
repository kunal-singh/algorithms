import { describe, it, expect } from 'vitest';
import TwoSum from '../two-sum.js';

describe('Two sum', () => {
  it('finds pair summing to target', () => {
    const arr1 = [1, 6, 7, 8, 9, 10];
    expect(TwoSum(arr1, 9)).toEqual([0, 3]);
    expect(TwoSum(arr1, 10)).toEqual([0, 4]);
  });
  it('returns null when no pair exists', () => {
    expect(TwoSum([1, 6, 7, 8, 9, 10], 21)).toBeNull();
  });
  it('finds pair at start of array', () => {
    expect(TwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('finds pair not at index 0', () => {
    expect(TwoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it('handles duplicate values that sum to target', () => {
    expect(TwoSum([3, 3], 6)).toEqual([0, 1]);
  });
  it('handles negative numbers', () => {
    expect(TwoSum([-3, 4, 7], 1)).toEqual([0, 1]);
  });
  it('handles zeros — two zeros sum to zero', () => {
    expect(TwoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
});
