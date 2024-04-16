import { describe, it, expect } from 'vitest';
import Stack from '../pre/stack.js';

describe('Stack', () => {
  it('testing basic operations', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.size()).toEqual(4);
    expect(stack.peek()).toEqual(4);
    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(3);
  });
  it('testing stack view utility', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.size()).toEqual(4);

    const arr = [4, 3, 2, 1];
    let count = 0;
    stack.view((v) => {
      expect(v).toEqual(arr[count]);
      count += 1;
    });
  });
});
