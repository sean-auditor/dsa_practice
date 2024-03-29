"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubble_sort_1 = require("../../../../algorithms/sorting_algorithms/bubble_sort/bubble_sort");
describe('bubble sort test', () => {
    it('should be able to sort the given array of numbers', () => {
        const given = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
        const expected = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
        const result = (0, bubble_sort_1.bubbleSort)(given);
        expect(result).toStrictEqual(expected);
    });
    it('should be able to sort the given array of numbers', () => {
        const given = [5, 2, 8, 1, 9, 4, 7, 3, 6, 10];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = (0, bubble_sort_1.bubbleSort)(given);
        expect(result).toStrictEqual(expected);
    });
    it('should be able to sort the given array of numbers', () => {
        const given = [17, 23, 9, 14, 5, 20, 8, 12, 3, 11];
        const expected = [3, 5, 8, 9, 11, 12, 14, 17, 20, 23];
        const result = (0, bubble_sort_1.bubbleSort)(given);
        expect(result).toStrictEqual(expected);
    });
});
