"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("Resultat : " + num);
}
function addAndPrint(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let addition;
addition = add1;
console.log(addition(8, 9));
addAndPrint(10, 20, (result) => {
    console.log(result);
});
addAndPrint(15, 30, printResult1);
