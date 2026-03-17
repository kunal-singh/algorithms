import { describe, it, expect } from 'vitest';
import Matrix2D from '../pre/matrix2D.js';

describe('Test Matrix', () => {
  it('Check DFS from top-left', () => {
    const m = new Matrix2D();
    m.setMatrix([
      [-1, 2, 3],
      [0, 9, 8],
      [1, 0, 1]
    ]);
    expect(m.DFS([0, 0])).toEqual([-1, 0, 1, 0, 1, 8, 9, 2, 3]);
  });

  it('Check BFS from top-left', () => {
    const m = new Matrix2D();
    m.setMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]);
    expect(m.BFS([0, 0])).toEqual([
      1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16
    ]);
  });

  it('BFS and DFS on single-cell matrix return that cell value', () => {
    const m = new Matrix2D();
    m.setMatrix([[5]]);
    expect(m.BFS([0, 0])).toEqual([5]);
    expect(m.DFS([0, 0])).toEqual([5]);
  });

  it('BFS on non-square matrix visits all cells', () => {
    const m = new Matrix2D();
    m.setMatrix([
      [1, 2, 3],
      [4, 5, 6]
    ]);
    const result = m.BFS([0, 0]);
    expect(result.length).toEqual(6);
    expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('DFS from center of 3x3 matrix visits all cells', () => {
    const m = new Matrix2D();
    m.setMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    const result = m.DFS([1, 1]);
    expect(result.length).toEqual(9);
    expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
