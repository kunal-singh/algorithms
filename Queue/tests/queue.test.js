import { describe, it, expect } from 'vitest';
import Queue from '../pre/queue.js';

describe('Queue', () => {
  it('testing basic operations', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);
    expect(queue.size()).toEqual(4);
    expect(queue.peek()).toEqual(1);
    expect(queue.pop()).toEqual(1);
    expect(queue.pop()).toEqual(2);
  });
  it('testing Queue view utility', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);
    expect(queue.size()).toEqual(4);

    const arr = [1, 2, 3, 4];
    let count = 0;
    queue.view((v) => {
      expect(v).toEqual(arr[count]);
      count += 1;
    });
  });
});
