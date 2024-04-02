import { describe, it, expect } from 'vitest';
import BinarySearchTree from '../pre/binary-tree.js';

describe('Binary Search Tree', () => {
  it('Check add', () => {
    const tree = BinarySearchTree();
    expect(tree.height()).toEqual(0);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);
    expect(tree.height()).toEqual(5);
  });
  it('Check remove', () => {
    const tree = BinarySearchTree();
    expect(tree.height()).toEqual(0);

    tree.add(8);
    tree.add(3);
    tree.add(10);
    tree.add(1);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(7);
    tree.add(13);

    expect(tree.height()).toEqual(4);

    // tree.remove(8);
    // expect(tree.height()).toEqual(4);

    // tree.remove(2);
    // expect(tree.height()).toEqual(3);

    // tree.remove(70);
    // expect(tree.height()).toEqual(2);
  });
  it('Check search', () => {
    const tree = BinarySearchTree();
    expect(tree.height()).toEqual(0);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);

    let element = tree.search(1);
    expect(element).toBeTruthy();

    element = tree.search(7);
    expect(element).toEqual(null);
  });
  it('Check preorder traversal', () => {
    const tree = BinarySearchTree();
    expect(tree.height()).toEqual(0);
    tree.add(8);
    tree.add(3);
    tree.add(10);
    tree.add(1);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(7);
    tree.add(13);

    const iterator = tree.preorderIterator();
    const preorder = [8, 3, 1, 6, 4, 7, 10, 14, 13];
    let count = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const item of iterator) {
      expect(item).toBe(preorder[count]);
      count += 1;
    }
  });
  it('Check postorder traversal', () => {
    const tree = BinarySearchTree();
    expect(tree.height()).toEqual(0);
    tree.add(8);
    tree.add(3);
    tree.add(10);
    tree.add(1);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(7);
    tree.add(13);
    const iterator = tree.postorderIterator();
    const preorder = [1, 4, 7, 6, 3, 13, 14, 10, 8];
    let count = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const item of iterator) {
      expect(item).toBe(preorder[count]);
      count += 1;
    }
  });
  it('Check inorder traversal', () => {
    const tree = BinarySearchTree();
    expect(tree.height()).toEqual(0);
    tree.add(8);
    tree.add(3);
    tree.add(10);
    tree.add(1);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(7);
    tree.add(13);

    const iterator = tree.inorderIterator();
    const preorder = [1, 3, 4, 6, 7, 8, 10, 13, 14];
    let count = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const item of iterator) {
      expect(item).toBe(preorder[count]);
      count += 1;
    }
  });
  it('Check levelorder traversal', () => {
    const tree = BinarySearchTree();
    expect(tree.height()).toEqual(0);
    tree.add(8);
    tree.add(3);
    tree.add(10);
    tree.add(1);
    tree.add(6);
    tree.add(14);
    tree.add(4);
    tree.add(7);
    tree.add(13);

    const iterator = tree.heightorderIterator();
    const preorder = [8, 3, 10, 1, 6, 14, 4, 7, 13];
    let count = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const item of iterator) {
      expect(item).toBe(preorder[count]);
      count += 1;
    }
  });
});
