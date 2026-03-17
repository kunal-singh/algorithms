import { describe, it, expect } from 'vitest';
import binarySearch from '../binary-search.js';

describe('Binary Search', () => {
  it('finds element in the middle of the array', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  });
  it('returns -1 when element is not present', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });
  it('finds the first element', () => {
    expect(binarySearch([2, 5], 2)).toEqual(0);
  });
  it('finds the first element (negative)', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], -1)).toEqual(0);
  });
  it('finds the last element', () => {
    expect(binarySearch([1, 2, 3], 3)).toEqual(2);
  });
  it('finds the only element in a single-element array', () => {
    expect(binarySearch([5], 5)).toEqual(0);
  });
  it('returns -1 when target is absent from a single-element array', () => {
    expect(binarySearch([5], 3)).toEqual(-1);
  });
});
