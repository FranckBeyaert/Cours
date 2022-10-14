// Typage : Avantage du typage : Obtenir le résultat attendu

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Type incorrect');
    // }
    const result = n1 + n2
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

const nombre1 : number = 5;
const nombre2 : number = 10.8;
const printResult : boolean = true;
const resultPhrase : string = "Le résultat est : ";

const result = add(nombre1, nombre2, printResult, resultPhrase);

