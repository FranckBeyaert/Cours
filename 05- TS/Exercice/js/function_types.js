"use strict";
//types function
function Add(x, y) {
    return x + y;
}
function PrintResult(num) {
    console.log("Résultat :" + num);
}
let addition;
addition = Add;
console.log(addition(8, 9));
function addAndPrint(a, b, cb) {
    const result = a + b;
    cb(result);
}
addAndPrint(10, 20, (result) => {
    console.log(result);
});
addAndPrint(15, 30, PrintResult);
