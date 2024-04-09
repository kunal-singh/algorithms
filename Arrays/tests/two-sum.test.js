import { describe, it, expect } from 'vitest';
import TwoSum from '../two-sum.js';

describe('Two sum', () => {
  it('test case 1', () => {
    const arr1 = [1, 6, 7, 8, 9, 10];
    expect(TwoSum(arr1, 9)).toEqual([0, 3]);
    expect(TwoSum(arr1, 10)).toEqual([0, 4]);
    expect(TwoSum(arr1, 21)).toBeNull();
  });
  it('test case 2', () => {
    const arr1 = [2, 7, 11, 15];
    expect(TwoSum(arr1, 9)).toEqual([0, 1]);
  });
  it('test case 3', () => {
    const arr1 = [3, 2, 4];
    expect(TwoSum(arr1, 6)).toEqual([1, 2]);
  });
  it('test case 4', () => {
    const arr1 = [3, 3];
    expect(TwoSum(arr1, 6)).toEqual([0, 1]);
  });
});
