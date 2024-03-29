"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterativeFactorial_1 = require("../../../recursion/factorial/iterativeFactorial");
describe("Iterative factorial test", () => {
    it("should give correct factorial", () => {
        const expected = 120;
        const given = 5;
        const result = (0, iterativeFactorial_1.iterativeFactorial)(given);
        expect(result).toStrictEqual(expected);
    });
    it('should return correct factorial but array form', () => {
        const expected = [120, 3628800, 5040];
        const given = [5, 10, 7];
        const result = [];
        given.forEach(num => {
            result.push((0, iterativeFactorial_1.iterativeFactorial)(num));
        });
        expect(result).toStrictEqual(expected);
    });
});
