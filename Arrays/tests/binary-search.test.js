import { describe, it, expect } from 'vitest';
import binarySearch from '../binary-search.js';

describe('Binary Search', () => {
  it('test case 1', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  });
  it('test case 2', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });
  it('test case 3', () => {
    expect(binarySearch([2, 5], 2)).toEqual(0);
  });
  it('test case 4', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], -1)).toEqual(0);
  });
});
