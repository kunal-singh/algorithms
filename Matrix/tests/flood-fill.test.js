import { describe, it, expect } from 'vitest';
import floodFill from '../flood-fill.js';

describe('Test Flood fill', () => {
  it('fills connected region, stops at boundary', () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1]
        ],
        1,
        1,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1]
    ]);
  });

  it('no-op when starting pixel color equals new color', () => {
    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0]
        ],
        0,
        0,
        0
      )
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0]
    ]);
  });

  it('fills a single-pixel grid', () => {
    expect(floodFill([[1]], 0, 0, 3)).toEqual([[3]]);
  });

  it('fills entire grid when all pixels share the same color', () => {
    expect(
      floodFill(
        [
          [1, 1],
          [1, 1]
        ],
        0,
        0,
        5
      )
    ).toEqual([
      [5, 5],
      [5, 5]
    ]);
  });

  it('does not bleed into non-contiguous same-color cells', () => {
    expect(
      floodFill(
        [
          [1, 0, 1],
          [0, 0, 0],
          [1, 0, 1]
        ],
        0,
        0,
        9
      )
    ).toEqual([
      [9, 0, 1],
      [0, 0, 0],
      [1, 0, 1]
    ]);
  });
});
