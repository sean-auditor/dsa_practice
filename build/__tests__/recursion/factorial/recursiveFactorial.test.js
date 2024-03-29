"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recursiveFactorial_1 = require("../../../recursion/factorial/recursiveFactorial");
describe('Recursive Factorial Test', () => {
    it('should return correct factorial result.', () => {
        const expected = 120;
        const given = 5;
        const result = (0, recursiveFactorial_1.recursiveFactorial)(given);
        expect(result).toStrictEqual(expected);
    });
    it('should return correct factorial but array form', () => {
        const expected = [120, 3628800, 5040];
        const given = [5, 10, 7];
        const result = [];
        given.forEach(num => {
            result.push((0, recursiveFactorial_1.recursiveFactorial)(num));
        });
        expect(result).toStrictEqual(expected);
    });
});
