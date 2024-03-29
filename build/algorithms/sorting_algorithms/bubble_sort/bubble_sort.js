"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (numArr) => {
    const numArrCopy = [...numArr];
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (numArrCopy[j] > numArrCopy[j + 1]) {
                ;
                [numArrCopy[j], numArrCopy[j + 1]] = [numArrCopy[j + 1], numArrCopy[j]];
            }
        }
    }
    return numArrCopy;
};
exports.bubbleSort = bubbleSort;
