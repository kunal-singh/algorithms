import { describe, it, expect } from 'vitest';
import isPalindrome from '../valid-palindrome.js';

describe('Valid Palindrome', () => {
  it('test case 1', () => {
    const str = `A man, a plan, a canal: Panama`;
    expect(isPalindrome(str)).toBeTruthy();
  });
  it('test case 2', () => {
    const str = `race a car`;
    expect(isPalindrome(str)).toBeFalsy();
  });
  it('test case 3', () => {
    const str = ` `;
    expect(isPalindrome(str)).toBeTruthy();
  });
});
