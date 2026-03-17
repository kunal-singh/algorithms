import { expect, test } from 'vitest';
import Reverse from '../pre/Reverse.js';

test('reverses a normal array', () => {
  expect(Reverse([1, 2, 3])).toEqual([3, 2, 1]);
});

test('returns empty array for empty input', () => {
  expect(Reverse([])).toEqual([]);
});

test('returns single-element array unchanged', () => {
  expect(Reverse([42])).toEqual([42]);
});

test('throws on undefined input', () => {
  expect(() => Reverse()).toThrowError();
});

test('throws on null input', () => {
  expect(() => Reverse(null)).toThrowError();
});

test('throws on non-array input', () => {
  expect(() => Reverse('hello')).toThrowError();
});
