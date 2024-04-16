import { describe, it, expect } from 'vitest';
import Queue from '../pre/queue.js';

describe('Queue', () => {
  it('testing basic operations', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.size()).toEqual(4);
    expect(queue.peek()).toEqual(1);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });
  it('testing Queue view utility', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.size()).toEqual(4);

    const arr = [1, 2, 3, 4];
    let count = 0;
    queue.view((v) => {
      expect(v).toEqual(arr[count]);
      count += 1;
    });
  });
});
