import { describe, it, expect } from 'vitest';
import Matrix2D from '../pre/matrix2D.js';

describe('Test Matrix', () => {
  const matrix = new Matrix2D();
  matrix.setMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]);

  const matrix2 = new Matrix2D();
  matrix2.setMatrix([
    [-1, 2, 3],
    [0, 9, 8],
    [1, 0, 1]
  ]);

  it('Check DFS', () => {
    const DFSList = matrix.DFS([0, 0]);
    expect(DFSList).toEqual([-1, 2, 3, 8, 1, 0, 9, 0, 1]);
  });
  it('Check BFS', () => {
    const BFSList = matrix.DFS([0, 0]);
    expect(BFSList).toEqual([
      1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16
    ]);
  });
});
