import { describe, it, expect } from 'vitest';
import mergeSortedList from '../merge-sorted.js';
import SinglyLinkedList from '../pre/singly-linked-list.js';

describe('Check merge sorted', () => {
  it('test case 1', () => {
    const list1 = new SinglyLinkedList([1, 2, 4]);
    const list2 = new SinglyLinkedList([1, 3, 4]);
    const resultList = mergeSortedList(list1, list2);
    const resultArray = resultList.asArray();
    const expectedResult = [1, 1, 2, 3, 4, 4];
    expect(resultArray.length).toEqual(expectedResult.length);
    for (let i = 0; i < expectedResult.length; i += 1) {
      expect(resultArray[i]).toEqual(expectedResult[i]);
    }
  });
  it('test case 2', () => {
    const list1 = new SinglyLinkedList([]);
    const list2 = new SinglyLinkedList([]);
    const resultList = mergeSortedList(list1, list2);
    const resultArray = resultList.asArray();
    const expectedResult = [];
    expect(resultArray.length).toEqual(expectedResult.length);
    for (let i = 0; i < expectedResult.length; i += 1) {
      expect(resultArray[i]).toEqual(expectedResult[i]);
    }
  });
  it('test case 3', () => {
    const list1 = new SinglyLinkedList([]);
    const list2 = new SinglyLinkedList([0]);
    console.log(list1.asArray(), list2.asArray());
    const resultList = mergeSortedList(list1, list2);
    const resultArray = resultList.asArray();
    const expectedResult = [0];
    expect(resultArray.length).toEqual(expectedResult.length);
    for (let i = 0; i < expectedResult.length; i += 1) {
      expect(resultArray[i]).toEqual(expectedResult[i]);
    }
  });
});
