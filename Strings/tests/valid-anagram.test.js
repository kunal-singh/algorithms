import { describe, it, expect } from 'vitest';
import isAnagram from '../valid-anagram.js';

describe('Valid Anagram', () => {
  it('returns true for valid anagram', () => {
    expect(isAnagram(`anagram`, `nagaram`)).toBeTruthy();
  });
  it('returns false when same letters but different counts', () => {
    expect(isAnagram(`rat`, `car`)).toBeFalsy();
  });
  it('returns false when character counts differ', () => {
    expect(isAnagram(`aacc`, `ccac`)).toBeFalsy();
  });
  it('returns true for two empty strings', () => {
    expect(isAnagram(``, ``)).toBeTruthy();
  });
  it('returns false for different-length strings', () => {
    expect(isAnagram(`a`, `aa`)).toBeFalsy();
  });
  it('returns false for same chars but one repeated more', () => {
    expect(isAnagram(`aab`, `abb`)).toBeFalsy();
  });
  it('is case-sensitive: uppercase and lowercase differ', () => {
    expect(isAnagram(`Listen`, `Silent`)).toBeFalsy();
  });
});
