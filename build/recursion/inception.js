"use strict";
let counter = 0;
const inception2 = () => {
    console.log(counter);
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception2();
};
inception2();
