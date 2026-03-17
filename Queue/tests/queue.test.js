import { describe, it, expect } from 'vitest';
import Queue from '../pre/queue.js';

describe('Queue', () => {
  it('basic enqueue, peek, and dequeue maintain FIFO order', () => {
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

  it('view iterates in FIFO order', () => {
    const queue = new Queue();
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

  it('dequeue throws on empty queue', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrowError();
  });

  it('peek on empty queue returns undefined', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeUndefined();
  });

  it('single enqueue then dequeue leaves queue empty', () => {
    const queue = new Queue();
    queue.enqueue(42);
    expect(queue.dequeue()).toEqual(42);
    expect(queue.size()).toEqual(0);
  });

  it('interleaved enqueue and dequeue preserves FIFO order', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.size()).toEqual(0);
  });
});
