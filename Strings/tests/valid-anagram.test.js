import { describe, it, expect } from 'vitest';
import isAnagram from '../valid-anagram.js';

describe('Valid Anagram', () => {
  it('test case 1', () => {
    const str1 = `anagram`;
    const str2 = `nagaram`;
    expect(isAnagram(str1, str2)).toBeTruthy();
  });
  it('test case 2', () => {
    const str1 = `rat`;
    const str2 = `car`;
    expect(isAnagram(str1, str2)).toBeFalsy();
  });
  it('test case 3', () => {
    const str1 = `aacc`;
    const str2 = `ccac`;
    expect(isAnagram(str1, str2)).toBeFalsy();
  });
});
