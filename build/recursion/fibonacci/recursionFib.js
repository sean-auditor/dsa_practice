"use strict";
//Given the value num, return the index value of the Fibonacci sequence. Basically what number is in that num position in the sequence.
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursionFib = void 0;
const recursionFib = (num) => {
    // return num on 2 since everything below 2 is just 1 and 0
    if (num < 2) {
        return num;
    }
    return (0, exports.recursionFib)(num - 1) + (0, exports.recursionFib)(num - 2);
};
exports.recursionFib = recursionFib;
