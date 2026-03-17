import { describe, it, expect } from 'vitest';
import islandPerimeter from '../island-perimeter.js';

describe('Test Island Perimeter', () => {
  it('returns correct perimeter for cross-shaped island', () => {
    expect(
      islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]
      ])
    ).toEqual(16);
  });

  it('returns 4 for single land cell', () => {
    expect(islandPerimeter([[1]])).toEqual(4);
  });

  it('returns 4 for single land cell with adjacent water', () => {
    expect(islandPerimeter([[1, 0]])).toEqual(4);
  });

  it('returns 0 for all-water grid', () => {
    expect(
      islandPerimeter([
        [0, 0],
        [0, 0]
      ])
    ).toEqual(0);
  });

  it('returns 8 for 2x2 solid land block', () => {
    expect(
      islandPerimeter([
        [1, 1],
        [1, 1]
      ])
    ).toEqual(8);
  });

  it('returns 8 for horizontal strip of three cells', () => {
    expect(islandPerimeter([[1, 1, 1]])).toEqual(8);
  });

  it('returns correct perimeter for L-shaped island', () => {
    expect(
      islandPerimeter([
        [1, 0],
        [1, 1]
      ])
    ).toEqual(8);
  });
});
