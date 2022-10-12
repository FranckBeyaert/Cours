// ! Typage : Avantage du typage : Obtenir le résultat attendu

function add(x:number, y:number, showResult:boolean, phrase:string)
{
    // if(typeof x !== 'number' || typeof y !== 'number')
    // {
    //     throw new Error('Type incorrect');
    // }
    const result = x + y;
    if(showResult)
    {
        console.log(phrase + result);
    }
    else
    {
        return result;
    }
}

const x1:number = 5;
const y1:number = 10.8;
const printResult = true;
const resultPhrase = "Le résultat est ";

const result = add(x1, y1, printResult, resultPhrase);

console.log(result);

