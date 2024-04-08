import { describe, it, expect } from 'vitest';
import TwoSum from './two-sum.js';

describe('Two sum', () => {
  it('test case 1', () => {
    const arr1 = [1, 6, 7, 8, 9, 10];
    expect(TwoSum(arr1, 9)).toEqual([1, 8]);
  });
});
