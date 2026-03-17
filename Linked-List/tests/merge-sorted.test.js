import { describe, it, expect } from 'vitest';
import mergeSortedList from '../merge-sorted.js';
import SinglyLinkedList from '../pre/singly-linked-list.js';

function mergeAndCheck(arr1, arr2, expected) {
  const list1 = new SinglyLinkedList(arr1);
  const list2 = new SinglyLinkedList(arr2);
  expect(mergeSortedList(list1, list2).asArray()).toEqual(expected);
}

describe('Check merge sorted', () => {
  it('merges two equal-length sorted lists with duplicates', () => {
    mergeAndCheck([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]);
  });
  it('merges two empty lists', () => {
    mergeAndCheck([], [], []);
  });
  it('merges empty list with non-empty list', () => {
    mergeAndCheck([], [0], [0]);
  });
  it('merges non-empty list with empty list', () => {
    mergeAndCheck([1, 2, 3], [], [1, 2, 3]);
  });
  it('merges single-element lists', () => {
    mergeAndCheck([1], [2], [1, 2]);
    mergeAndCheck([2], [1], [1, 2]);
  });
  it('merges lists of unequal length', () => {
    mergeAndCheck([1, 3, 5], [2], [1, 2, 3, 5]);
  });
  it('merges lists containing negative numbers', () => {
    mergeAndCheck([-2, -1], [0, 1], [-2, -1, 0, 1]);
  });
});
