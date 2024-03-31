import { describe, it, expect } from 'vitest';

describe('Binary Search Tree', () => {
  it('Check add', () => {
    const list = LinkedList([1, 2, 3, 4, 5]);
    expect(list.asArray()).toEqual([1, 2, 3, 4, 5]);
  });
});
