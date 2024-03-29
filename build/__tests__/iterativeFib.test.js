"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterativeFib_1 = require("../recursion/fibonacci/iterativeFib");
//Given the value num, return the index value of the Fibonacci sequence. Basically what number is in that num position in the sequence.
describe('Recursion Fibonacci test', () => {
    it('should return the index value of the given in the fibonacci sequence ', () => {
        const given = 8;
        const expected = 21;
        const result = (0, iterativeFib_1.iterativeFib)(given);
        expect(result).toStrictEqual(expected);
    });
    it("should return the index values of the given numbers", () => {
        const given = [10, 21, 22, 30];
        const expected = [55, 10946, 17711, 832040];
        const result = [];
        given.forEach(num => {
            result.push((0, iterativeFib_1.iterativeFib)(num));
        });
        expect(result).toStrictEqual(expected);
    });
});
