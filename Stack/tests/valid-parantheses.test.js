import { describe, it, expect } from 'vitest';
import isValidParantheses from '../valid-parantheses.js';

describe('Valid Parantheses', () => {
  it('valid: adjacent pairs', () => {
    expect(isValidParantheses(`{}[]`)).toBeTruthy();
  });
  it('invalid: unclosed bracket', () => {
    expect(isValidParantheses(`{}[`)).toBeFalsy();
  });
  it('invalid: interleaved mismatched brackets', () => {
    expect(isValidParantheses(`{[}]`)).toBeFalsy();
  });
  it('valid: nested brackets', () => {
    expect(isValidParantheses(`({[]})`)).toBeTruthy();
  });
  it('invalid: starts with closing bracket', () => {
    expect(isValidParantheses(`]`)).toBeFalsy();
  });
  it('invalid: mismatched closing bracket inside', () => {
    expect(isValidParantheses(`([}}])`)).toBeFalsy();
  });
  it('valid: empty string has no unmatched brackets', () => {
    expect(isValidParantheses(``)).toBeTruthy();
  });
  it('invalid: only opening brackets, never closed', () => {
    expect(isValidParantheses(`((((`)).toBeFalsy();
  });
  it('valid: deeply nested balanced brackets', () => {
    expect(isValidParantheses(`({[({[]})]})`)).toBeTruthy();
  });
});
