import { describe, it, expect } from 'vitest';
import Stack from '../pre/stack.js';

describe('Stack', () => {
  it('basic push, peek, and pop maintain LIFO order', () => {
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

  it('view iterates in LIFO order', () => {
    const stack = new Stack();
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

  it('pop throws on empty stack', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrowError();
  });

  it('peek on empty stack returns undefined', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeUndefined();
  });

  it('popping all elements leaves stack empty', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.size()).toEqual(0);
    expect(() => stack.pop()).toThrowError();
  });
});
