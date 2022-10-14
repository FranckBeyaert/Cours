// types function

function add1(n1: number, n2: number): number{
    return n1 + n2;
}

function printResult1(num: number): void{
    console.log("Resultat : " + num);
}

function addAndPrint(n1: number, n2: number, cb : (num : number) => void){
    const result = n1 + n2;
    cb(result);
}

let addition : (a: number, b: number) => number;

addition = add1;
//addition = printResult1  Erreur : addition a besoin de 2 paramètres
//addition = 5; Erreur : addition est une fonction et un nombre ne peut pas etre assignable

console.log(addition(8,9));

addAndPrint(10,20, (result) => {
    console.log(result);
})


addAndPrint(15,30, printResult1);