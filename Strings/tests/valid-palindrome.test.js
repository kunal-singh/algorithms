import { describe, it, expect } from 'vitest';
import isPalindrome from '../valid-palindrome.js';

describe('Valid Palindrome', () => {
  it('returns true for classic alphanumeric palindrome with punctuation', () => {
    expect(isPalindrome(`A man, a plan, a canal: Panama`)).toBeTruthy();
  });
  it('returns false for non-palindrome', () => {
    expect(isPalindrome(`race a car`)).toBeFalsy();
  });
  it('returns true for string with only non-alphanumeric characters', () => {
    expect(isPalindrome(` `)).toBeTruthy();
  });
  it('returns true for empty string', () => {
    expect(isPalindrome(``)).toBeTruthy();
  });
  it('returns true for single character', () => {
    expect(isPalindrome(`a`)).toBeTruthy();
  });
  it('returns true for numeric palindrome', () => {
    expect(isPalindrome(`12321`)).toBeTruthy();
  });
  it('returns false for non-palindrome number string', () => {
    expect(isPalindrome(`123`)).toBeFalsy();
  });
  it('returns false for mixed alphanumeric non-palindrome', () => {
    expect(isPalindrome(`0P`)).toBeFalsy();
  });
});
