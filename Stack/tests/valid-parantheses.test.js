import { describe, it, expect } from 'vitest';
import isValidParantheses from '../valid-parantheses.js';

describe('Valid Parantheses', () => {
  it('test cases', () => {
    expect(isValidParantheses(`{}[]`)).toBeTruthy();
    expect(isValidParantheses(`{}[`)).toBeFalsy();
    expect(isValidParantheses(`{[}]`)).toBeFalsy();
    expect(isValidParantheses(`({[]})`)).toBeTruthy();
    expect(isValidParantheses(`]`)).toBeFalsy();
    expect(isValidParantheses(`([}}])`)).toBeFalsy();
  });
});
