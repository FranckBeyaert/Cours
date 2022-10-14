"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultConversion == "nombre") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAge = combine(30, 26, "nombre");
console.log(combineAge);
const combineNames = combine("Jean", "Paul", "text");
console.log(combineNames);
const combineStringAge = combine("30", "26.7", "nombre");
console.log(combineStringAge);
