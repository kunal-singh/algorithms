import { describe, it, expect } from 'vitest';
import floodFill from '../flood-fill.js';

describe('Test Flood fill', () => {
  it('Test Case 1', () => {
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

  it('Test Case 2', () => {
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
});
