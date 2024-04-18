import { describe, it, expect } from 'vitest';
import islandPerimeter from '../island-perimeter.js';

describe('Test Island Perimeter', () => {
  it('Test Case 1', () => {
    expect(
      islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]
      ])
    ).toEqual(16);
  });

  it('Test Case 2', () => {
    expect(islandPerimeter([[1]])).toEqual(4);
  });

  it('Test Case 3', () => {
    expect(islandPerimeter([[1, 0]])).toEqual(4);
  });
});
