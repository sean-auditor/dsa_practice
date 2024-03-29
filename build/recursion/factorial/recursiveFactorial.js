"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveFactorial = void 0;
const recursiveFactorial = (numToFactorial) => {
    if (numToFactorial <= 1) {
        return 1;
    }
    return numToFactorial * (0, exports.recursiveFactorial)(numToFactorial - 1);
};
exports.recursiveFactorial = recursiveFactorial;
