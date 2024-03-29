"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterativeFib = void 0;
const iterativeFib = (num) => {
    const fibArr = [0, 1];
    for (let i = 0; i < num; i++) {
        const newNum = fibArr[i] + fibArr[i + 1];
        fibArr.push(newNum);
    }
    return fibArr[num];
};
exports.iterativeFib = iterativeFib;
