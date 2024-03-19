import Reverse from "../pre/Reverse.js";
import { expect, test } from 'vitest';

test(`Running test for Reverse - expected`,() => {
    expect(Reverse([1,2,3])).toEqual([3,2,1]);
})

test(`Running test for reverse - undefined input`,() => {
        expect(() => Reverse()).toThrowError();
})

test(`Running test for reverse - null input`,() => {
    expect(() => Reverse()).toThrowError();
})

test(`Running test for reverse - incompatible param`,() => {
    expect(() => Reverse()).toThrowError();
})

