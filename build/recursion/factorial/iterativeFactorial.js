"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterativeFactorial = void 0;
const iterativeFactorial = (numToFactorial) => {
    let runningProduct = 1;
    for (let i = numToFactorial; i >= 1; i--) {
        runningProduct = i * runningProduct;
    }
    return runningProduct;
};
exports.iterativeFactorial = iterativeFactorial;
