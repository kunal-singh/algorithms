import { describe, it, expect } from 'vitest';
import BinarySearchTree from '../pre/binary-tree.js';

describe('Binary Search Tree', () => {
  it('Check add', () => {
    const tree = BinarySearchTree();
    expect(tree.level()).toEqual(0);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    expect(tree.level()).toEqual(4);
  });
  it('Check remove', () => {
    const tree = BinarySearchTree();
    expect(tree.level()).toEqual(0);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);

    tree.remove(1);
    expect(tree.level()).toEqual(3);

    tree.remove(2);
    expect(tree.level()).toEqual(3);

    tree.remove(70);
    expect(tree.level()).toEqual(3);
  });
});
